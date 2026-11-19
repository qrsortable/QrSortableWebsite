import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
import JsBarcode from 'jsbarcode';
import { encryptAes } from './aesHelper';
import { GeneratorOrderConfig, GeneratorPageFormat } from '../types';

export const PRICE_PER_PAGE_EUR: Record<GeneratorPageFormat, number> = {
  A4: 3,
  A5: 2,
};

export const CODES_PER_PAGE: Record<GeneratorPageFormat, number> = {
  A4: 12,
  A5: 6,
};

const SHEET_GEOMETRY = {
  A4: {
    pageWidthMm: 210.0,
    pageHeightMm: 297.0,
    cellWidthMm: 70.0, // 3 × 70 = 210 (zero side margin)
    cellHeightMm: 67.7,
    topMarginMm: 13.1,
    cols: 3,
    rows: 4,
    perPage: 12,
  },
  A5: {
    pageWidthMm: 148.0,
    pageHeightMm: 210.0,
    cellWidthMm: 74.0, // 2 × 74 = 148 (zero side margin)
    cellHeightMm: 66.3,
    topMarginMm: 10.1,
    cols: 2,
    rows: 3,
    perPage: 6,
  },
} as const;

export function sanitizeHexColor(hex?: string): string {
  const raw = (hex || '#000000').trim();
  const cleaned = raw.startsWith('#') ? raw : `#${raw}`;
  return /^#[0-9A-Fa-f]{6}$/.test(cleaned) ? cleaned.toUpperCase() : '#000000';
}

function hexToRgb(hex: string): [number, number, number] {
  const safe = sanitizeHexColor(hex).slice(1);
  return [
    parseInt(safe.slice(0, 2), 16),
    parseInt(safe.slice(2, 4), 16),
    parseInt(safe.slice(4, 6), 16),
  ];
}

function generateSingleRandomCode(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const buf = new Uint32Array(6);
  window.crypto.getRandomValues(buf);
  let out = '';
  for (let i = 0; i < 3; i++) out += letters[buf[i] % letters.length];
  for (let i = 3; i < 6; i++) out += digits[buf[i] % digits.length];
  return out;
}

/**
 * Generates a collision-free batch of human-readable codes matching ^[A-Z]{3}[0-9]{3}$.
 */
export function generateUniqueCodeBatch(pageFormat: GeneratorPageFormat, pageCount: number): string[] {
  const clampedPages = Math.max(1, Math.min(5, Math.round(pageCount)));
  const total = clampedPages * CODES_PER_PAGE[pageFormat];
  const seen = new Set<string>();
  const codes: string[] = [];

  while (codes.length < total) {
    const candidate = generateSingleRandomCode();
    if (!seen.has(candidate)) {
      seen.add(candidate);
      codes.push(candidate);
    }
  }
  return codes;
}

async function buildEncryptedValue(code: string, hexColor: string): Promise<string> {
  const plain = `${code}${hexColor}`;
  return encryptAes(plain);
}

async function createQrDataUrl(encryptedText: string, hexColor: string, widthPx = 620): Promise<string> {
  return QRCode.toDataURL(encryptedText, {
    errorCorrectionLevel: 'Q',
    margin: 1,
    width: widthPx,
    color: {
      dark: sanitizeHexColor(hexColor),
      light: '#FFFFFF',
    },
  });
}

function createBarcodeDataUrl(
  encryptedText: string,
  barHeightPx = 260
): { dataUrl: string; width: number; height: number } {
  const canvas = document.createElement('canvas');
  JsBarcode(canvas, encryptedText, {
    format: 'CODE128',
    displayValue: false,
    margin: 8,
    width: 2,
    height: barHeightPx,
    lineColor: '#000000',
    background: '#FFFFFF',
  });
  return {
    dataUrl: canvas.toDataURL('image/png'),
    width: canvas.width,
    height: canvas.height,
  };
}

const DUMMY_PREVIEW_PAYLOAD = 'QRSORTABLE-SAMPLE-PREVIEW-NOT-FOR-APP';

/**
 * Renders a visual-only dummy preview PNG DataURL matching the sticker layout.
 * Uses a non-encrypted dummy payload + visual watermark so screenshots cannot be scanned in QrSortable.
 */
export async function renderSampleLabelDataUrl(
  config: Pick<GeneratorOrderConfig, 'codeType' | 'tagName' | 'hexColor'>,
  sampleLabel = 'SAMPLE'
): Promise<string> {
  const effectiveHex = config.codeType === 'qr' ? sanitizeHexColor(config.hexColor) : '#000000';
  const topLabel = (sampleLabel || 'SAMPLE').trim().toUpperCase();
  const tag = (config.tagName || '').trim();

  const canvas = document.createElement('canvas');
  const w = 640;
  const h = config.codeType === 'qr' ? 760 : 480;
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, w, h);

  // Top dummy label (never a valid ^[A-Z]{3}[0-9]{3}$ code)
  ctx.fillStyle = effectiveHex;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '900 66px system-ui, -apple-system, sans-serif';
  ctx.fillText(topLabel, w / 2, 60);

  if (config.codeType === 'qr') {
    const qrUrl = await createQrDataUrl(DUMMY_PREVIEW_PAYLOAD, effectiveHex, 520);
    const img = await loadImage(qrUrl);
    const qrSize = 510;
    ctx.drawImage(img, (w - qrSize) / 2, 118, qrSize, qrSize);
  } else {
    const bc = createBarcodeDataUrl(DUMMY_PREVIEW_PAYLOAD, 240);
    const img = await loadImage(bc.dataUrl);
    const maxW = w - 44;
    const maxH = 225;
    const scale = Math.min(maxW / bc.width, maxH / bc.height);
    const drawW = maxW;
    const drawH = Math.min(maxH, Math.max(bc.height * scale, 185));
    const drawY = tag ? 116 : 126 + (maxH - drawH) / 2;
    ctx.drawImage(img, (w - drawW) / 2, drawY, drawW, drawH);
  }

  // Subtle rotated watermark banner over the code to deter screenshots while preserving layout & color visibility
  ctx.save();
  const centerY = config.codeType === 'qr' ? 118 + 255 : (tag ? 116 + 100 : 126 + 112);
  ctx.translate(w / 2, centerY);
  ctx.rotate(-0.22);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.strokeStyle = effectiveHex;
  ctx.lineWidth = 4;
  const boxW = 320;
  const boxH = 74;
  ctx.beginPath();
  ctx.roundRect(-boxW / 2, -boxH / 2, boxW, boxH, 16);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = effectiveHex;
  ctx.font = '900 36px system-ui, -apple-system, sans-serif';
  ctx.fillText(topLabel, 0, 2);
  ctx.restore();

  // Bottom optional tag with auto-fit font sizing so long strings never clip
  if (tag) {
    let fontSize = 56;
    const maxTextWidth = w - 56;
    while (fontSize > 22) {
      ctx.font = `800 ${fontSize}px system-ui, -apple-system, sans-serif`;
      if (ctx.measureText(tag).width <= maxTextWidth) break;
      fontSize -= 2;
    }
    ctx.fillStyle = effectiveHex;
    ctx.fillText(tag, w / 2, config.codeType === 'qr' ? h - 54 : h - 70);
  }

  return canvas.toDataURL('image/png');
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function fitTextInPdf(doc: jsPDF, text: string, maxWidthMm: number, initialPt: number, minPt = 6.5): number {
  let pt = initialPt;
  while (pt > minPt) {
    doc.setFontSize(pt);
    if (doc.getTextWidth(text) <= maxWidthMm) return pt;
    pt -= 0.5;
  }
  doc.setFontSize(minPt);
  return minPt;
}

/**
 * Generates an exact-millimeter A4 (12/page) or A5 (6/page) PDF matching QrSortable's label sheets,
 * fixing square QR aspect ratio and auto-fitting tag text cleanly.
 */
export async function generateLabelsPdfBlob(
  config: GeneratorOrderConfig,
  codes?: string[],
  options?: { showCutLines?: boolean }
): Promise<{ blob: Blob; filename: string; codes: string[] }> {
  const geom = SHEET_GEOMETRY[config.pageFormat];
  const batch = codes && codes.length > 0 ? codes : generateUniqueCodeBatch(config.pageFormat, config.pageCount);
  const showCutLines = options?.showCutLines ?? config.showCutLines ?? false;
  const effectiveHex = config.codeType === 'qr' ? sanitizeHexColor(config.hexColor) : '#000000';
  const [r, g, b] = hexToRgb(effectiveHex);
  const tag = (config.tagName || '').trim();

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: [geom.pageWidthMm, geom.pageHeightMm],
    compress: true,
  });

  const hPad = 3.0;
  const vPad = 2.5;
  const topBandMm = 7.4;
  const bottomBandMm = tag ? 7.0 : 1.5;

  for (let i = 0; i < batch.length; i += geom.perPage) {
    if (i > 0) {
      doc.addPage([geom.pageWidthMm, geom.pageHeightMm], 'portrait');
    }

    for (let j = 0; j < geom.perPage && i + j < batch.length; j++) {
      const code = batch[i + j];
      const col = j % geom.cols;
      const row = Math.floor(j / geom.cols);

      const cellX = col * geom.cellWidthMm;
      const cellY = geom.topMarginMm + row * geom.cellHeightMm;

      if (showCutLines) {
        doc.setDrawColor(210, 210, 210);
        doc.setLineWidth(0.2);
        doc.setLineDashPattern([1.5, 1.5], 0);
        doc.rect(cellX, cellY, geom.cellWidthMm, geom.cellHeightMm);
        doc.setLineDashPattern([], 0);
      }

      const availW = geom.cellWidthMm - 2 * hPad;
      const encrypted = await buildEncryptedValue(code, effectiveHex);

      if (config.codeType === 'qr') {
        // Top human-readable code
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(r, g, b);
        doc.setFontSize(16.5);
        doc.text(code, cellX + geom.cellWidthMm / 2, cellY + vPad + 5.5, { align: 'center' });

        const availH = geom.cellHeightMm - vPad * 2 - topBandMm - bottomBandMm;
        const contentTopY = cellY + vPad + topBandMm;
        const qrSize = Math.min(availW, availH);
        const qrX = cellX + (geom.cellWidthMm - qrSize) / 2;
        const qrY = contentTopY + (availH - qrSize) / 2;
        const qrDataUrl = await createQrDataUrl(encrypted, effectiveHex, 620);
        doc.addImage(qrDataUrl, 'PNG', qrX, qrY, qrSize, qrSize);

        if (tag) {
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(r, g, b);
          fitTextInPdf(doc, tag, availW, 14, 7.0);
          doc.text(tag, cellX + geom.cellWidthMm / 2, cellY + geom.cellHeightMm - vPad - 1.2, {
            align: 'center',
          });
        }
      } else {
        // Group Code + tall Barcode + Tag tightly together & center vertically inside the cell
        const codePt = 17.5;
        const codeCapMm = 4.6;
        const gapCodeToBar = 3.2;
        const barH = tag ? 25.0 : 28.0;
        const gapBarToTag = 5.0;
        const tagCapMm = 3.8;
        const tagDescMm = 1.2;

        const totalBlockH = tag
          ? codeCapMm + 1.0 + gapCodeToBar + barH + gapBarToTag + tagCapMm + tagDescMm
          : codeCapMm + 1.0 + gapCodeToBar + barH;
        const blockTopY = cellY + (geom.cellHeightMm - totalBlockH) / 2;
        const codeBaselineY = blockTopY + codeCapMm;
        const bcY = blockTopY + codeCapMm + 1.0 + gapCodeToBar;

        doc.setFont('helvetica', 'bold');
        doc.setTextColor(r, g, b);
        doc.setFontSize(codePt);
        doc.text(code, cellX + geom.cellWidthMm / 2, codeBaselineY, { align: 'center' });

        const bc = createBarcodeDataUrl(encrypted, 260);
        const bcW = availW;
        const bcX = cellX + (geom.cellWidthMm - bcW) / 2;
        doc.addImage(bc.dataUrl, 'PNG', bcX, bcY, bcW, barH);

        if (tag) {
          const tagBaselineY = bcY + barH + gapBarToTag + tagCapMm;
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(r, g, b);
          fitTextInPdf(doc, tag, availW, 15, 7.5);
          doc.text(tag, cellX + geom.cellWidthMm / 2, tagBaselineY, { align: 'center' });
        }
      }
    }
  }

  const slugTag = tag ? `-${tag.toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}` : '';
  const filename = `qrsortable-${config.codeType}-${config.pageFormat.toLowerCase()}-${config.pageCount}p${slugTag}.pdf`;
  const blob = doc.output('blob');
  return { blob, filename, codes: batch };
}

export function triggerBlobUrlDownload(url: string, filename: string): void {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function triggerBlobDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  triggerBlobUrlDownload(url, filename);
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

export async function triggerSequentialBlobDownloads(
  files: Array<{ url?: string; blob?: Blob; filename: string }>
): Promise<void> {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.url) {
      triggerBlobUrlDownload(file.url, file.filename);
    } else if (file.blob) {
      triggerBlobDownload(file.blob, file.filename);
    }
    if (i < files.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 350));
    }
  }
}
