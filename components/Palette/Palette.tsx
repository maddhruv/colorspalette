import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Flex, Box } from "reflexbox";
import Clipboard from "clipboard";
import contrast from "contrast";
import { MdOpenInNew } from "react-icons/md";

import { PaletteProps } from "./types";
import {
  PaletteWrapper,
  PaletteHeader,
  Color,
  ColorContainer,
  Keyword,
} from "./styles";
import { Toast } from "../common";

const Palette: React.FC<PaletteProps> = ({
  identifier,
  name,
  colors,
  keywords,
  handleKeyword,
  source,
}: PaletteProps) => {
  const [toastOpen, setToastOpen] = useState<boolean>(false);

  useEffect(() => {
    const clipboard = new Clipboard(".copy");
    clipboard.on("success", (e) => {
      setToastOpen(true);
      setTimeout(() => {
        setToastOpen(false);
      }, 1800);
      e.clearSelection();
    });
  }, [toastOpen]);

  const isHomePage = source === "homepage";

  return (
    <PaletteWrapper
      className="palettewrapper
    "
    >
      <Box width={[8 / 10, 9 / 10]} p={16} flexDirection="column">
        <Box mb={16}>
          <PaletteHeader>{name}</PaletteHeader>
        </Box>
        <ColorContainer id={`palette-${identifier}`}>
          {colors.map((color, index) => (
            <Box width={1 / colors.length}>
              <Color
                className="copy"
                data-clipboard-text={color}
                colorSrc={color}
                key={color}
                index={index}
                contrast={contrast(color)}
              >
                <Box display={["none", "block"]}>COPY</Box>
              </Color>
            </Box>
          ))}
        </ColorContainer>
        <Box>
          {keywords.map((keyword) => (
            <Keyword
              key={keyword}
              onClick={isHomePage ? () => handleKeyword(keyword) : () => null}
            >
              {keyword}
            </Keyword>
          ))}
        </Box>
        <Toast open={toastOpen}>Copied</Toast>
      </Box>
      <Box
        width={[2 / 10, 1 / 10]}
        textAlign="right"
        flexDirection="column"
        p={"16px"}
        fontSize="22px"
      >
        {isHomePage && (
          <Box>
            <abbr title="Open Palette">
              <Link href="/[palette]" as={`/${identifier.toLowerCase()}`}>
                <MdOpenInNew />
              </Link>
            </abbr>
          </Box>
        )}
      </Box>
    </PaletteWrapper>
  );
};

export default Palette;
