export interface ColorSwatch {
  hex: string;
  names: {
    EN: string;
    DE: string;
    FR: string;
    ES: string;
  };
}

/**
 * Exact 12 preset color swatches matching ColorSwatchBar.Presets from the QrSortable mobile app.
 */
export const COLOR_SWATCH_PRESETS: ColorSwatch[] = [
  { hex: '#D01C1D', names: { EN: 'Red', DE: 'Rot', FR: 'Rouge', ES: 'Rojo' } },
  { hex: '#CF09C9', names: { EN: 'Pink', DE: 'Pink', FR: 'Rose vif', ES: 'Rosa fucsia' } },
  { hex: '#3254DB', names: { EN: 'Blue', DE: 'Blau', FR: 'Bleu', ES: 'Azul' } },
  { hex: '#E28F13', names: { EN: 'Orange', DE: 'Orange', FR: 'Orange', ES: 'Naranja' } },
  { hex: '#6A2BD9', names: { EN: 'Violet', DE: 'Violett', FR: 'Violet', ES: 'Violeta' } },
  { hex: '#7B4A1E', names: { EN: 'Brown', DE: 'Braun', FR: 'Marron', ES: 'Marrón' } },
  { hex: '#000000', names: { EN: 'Black', DE: 'Schwarz', FR: 'Noir', ES: 'Negro' } },
  { hex: '#00A08A', names: { EN: 'Teal', DE: 'Türkis', FR: 'Sarcelle', ES: 'Verde azulado' } },
  { hex: '#F2D200', names: { EN: 'Yellow', DE: 'Gelb', FR: 'Jaune', ES: 'Amarillo' } },
  { hex: '#CA9B84', names: { EN: 'Dusty Tan', DE: 'Sandbraun', FR: 'Beige sable', ES: 'Beige arena' } },
  { hex: '#A84D6E', names: { EN: 'Dusty Rose', DE: 'Altrosa', FR: 'Vieux rose', ES: 'Rosa empolvado' } },
  { hex: '#276D5E', names: { EN: 'Deep Teal Green', DE: 'Tiefgrün', FR: 'Vert sapin', ES: 'Verde pino' } },
];
