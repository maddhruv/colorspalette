import React from "react";
import html2canvas from "html2canvas";

import { MdImage } from "react-icons/md";

import { track } from "../lib/analytics";

interface PaletteImageProps {
  identifier: string;
  isHomePage: boolean;
}

const PaletteImage: React.FC<PaletteImageProps> = ({
  identifier,
  isHomePage,
}: PaletteImageProps) => {
  const handler = () => {
    html2canvas(document.getElementById(identifier)).then(
      (canvas: HTMLCanvasElement) => {
        const anchor = document.createElement("a");
        anchor.href = canvas.toDataURL();
        anchor.download = `${identifier}.png`;
        anchor.click();
      }
    );
  };
  return (
    <MdImage
      cursor="pointer"
      onClick={() => {
        handler();
        track({
          action: "download-palette",
          category: isHomePage ? "homepage" : "palette",
          label: identifier,
        });
      }}
    />
  );
};

export default PaletteImage;
