import React from "react";
import { useRouter } from "next/router";

import srcPalettes from "../palettes";
import Palette from "../components/Palette";

const PalettePage = () => {
  const router = useRouter();

  const { palette } = router.query;

  const paletteSrc = srcPalettes[palette as string];

  if (!paletteSrc) {
    return null;
    // TODO Add 404 page here
  }

  const { name, colors, keywords } = paletteSrc;

  return (
    <div>
      <Palette
        identifier={palette as string}
        name={name}
        colors={colors}
        keywords={keywords}
        source="palette"
      />
    </div>
  );
};

export default PalettePage;
