const encoder = new TextEncoder();
const decoder = new TextDecoder();

// Must match QrSortable mobile app AesHelper.cs (AES-256-CBC, PKCS7 padding)
const KEY_BYTES = encoder.encode('12345678901234561234567890123456'); // 32 bytes
const IV_BYTES = encoder.encode('1234567890123456'); // 16 bytes

let cachedKeyPromise: Promise<CryptoKey> | null = null;

function getSubtleCrypto(): SubtleCrypto {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new Error('Web Crypto API is required for label encryption.');
  }
  return subtle;
}

async function getAesKey(): Promise<CryptoKey> {
  if (cachedKeyPromise) return cachedKeyPromise;

  cachedKeyPromise = getSubtleCrypto().importKey(
    'raw',
    KEY_BYTES,
    { name: 'AES-CBC' },
    false,
    ['encrypt', 'decrypt']
  );

  try {
    return await cachedKeyPromise;
  } catch (err) {
    cachedKeyPromise = null;
    throw err;
  }
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

/**
 * Encrypts plaintext using AES-256-CBC with PKCS7 padding, matching the QrSortable app's AesHelper.
 */
export async function encryptAes(plainText: string): Promise<string> {
  const subtle = getSubtleCrypto();
  const key = await getAesKey();
  const data = encoder.encode(plainText);

  const encryptedBuffer = await subtle.encrypt(
    { name: 'AES-CBC', iv: IV_BYTES },
    key,
    data
  );

  return bytesToBase64(new Uint8Array(encryptedBuffer));
}

/**
 * Decrypts Base64 AES-256-CBC ciphertext back to UTF-8 plaintext, matching the QrSortable app's AesHelper.
 */
export async function decryptAes(cipherText: string): Promise<string> {
  if (!cipherText || typeof cipherText !== 'string') {
    throw new Error('Invalid or empty ciphertext input.');
  }

  const subtle = getSubtleCrypto();
  const key = await getAesKey();
  const cipherBytes = base64ToBytes(cipherText.trim());

  const decryptedBuffer = await subtle.decrypt(
    { name: 'AES-CBC', iv: IV_BYTES },
    key,
    cipherBytes
  );

  return decoder.decode(decryptedBuffer);
}
