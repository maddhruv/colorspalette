import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import srcPalettes from "../palettes";
import Palette from "../components/Palette";

import META from "../config/meta";

const PalettePage = () => {
  const router = useRouter();

  const { palette } = router.query;

  const paletteSrc = srcPalettes[palette as string];

  if (!paletteSrc) {
    return null;
    // TODO Add 404 page here
  }

  const { name, colors, keywords } = paletteSrc;

  const pageTitle = `${name} color palette | ${META.title}`;

  const description = `${pageTitle}, ${META.description}`;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>
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
