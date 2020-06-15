export interface PaletteProps {
  name: string;
  colors: Array<string>;
  keywords: Array<string>;
  handleKeyword: (keyword: string) => void;
}
