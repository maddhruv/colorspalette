export interface Palette {
  [key: string]: {
    id: string;
    name: string;
    colors: Array<string>;
    keywords: Array<string>;
  };
}
