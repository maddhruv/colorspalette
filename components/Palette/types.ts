export interface PaletteProps {
  identifier: string;
  name: string;
  colors: Array<string>;
  keywords: Array<string>;
  handleKeyword?: (keyword: string) => void;
  source: "homepage" | "palette";
}
