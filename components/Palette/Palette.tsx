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

import { track } from "../../lib/analytics";

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
      track({
        action: "copy-to-clipboard",
        category: isHomePage ? "homepage" : "palette",
        label: e.text,
      });
      setTimeout(() => {
        setToastOpen(false);
      }, 1800);
      e.clearSelection();
    });
  }, [toastOpen]);

  const isHomePage = source === "homepage";

  const handleKeywordClick = (keyword) => {
    if (isHomePage) {
      handleKeyword(keyword);
      track({
        action: "click-tag",
        category: "homepage",
        label: keyword,
      });
    }
  };

  return (
    <PaletteWrapper
      className="palettewrapper"
      isHomePage={isHomePage}
      flexDirection={isHomePage ? ["column", "row"] : "column"}
    >
      <Box width={isHomePage ? [1, 9 / 10] : 1} p={16} flexDirection="column">
        <Box mb={16}>
          <Link href="/[palette]" as={`/${identifier.toLowerCase()}`}>
            <PaletteHeader
              onClick={() =>
                track({
                  action: "click-palette",
                  category: isHomePage ? "homepage" : "palette",
                  label: identifier,
                })
              }
            >
              {name}
            </PaletteHeader>
          </Link>
        </Box>
        <ColorContainer id={`palette-${identifier}`} isHomePage={isHomePage}>
          {colors.map((color) => (
            <Box width={1 / colors.length}>
              <Color
                className="copy"
                data-clipboard-text={color}
                colorSrc={color}
                key={color}
                contrast={contrast(color)}
              >
                <Box display={["none", "block"]} height="100%">
                  COPY
                </Box>
              </Color>
            </Box>
          ))}
        </ColorContainer>
        <Box mt="4px">
          {keywords.map((keyword) => (
            <Keyword key={keyword} onClick={() => handleKeywordClick(keyword)}>
              {keyword}
            </Keyword>
          ))}
        </Box>
        <Toast open={toastOpen}>Copied</Toast>
      </Box>
      <Box
        width={isHomePage ? [1, 1 / 10] : 1}
        textAlign="right"
        flexDirection="column"
        p={"16px"}
        fontSize="22px"
      >
        {isHomePage && (
          <Box>
            <abbr title="Open Palette">
              <Link href="/[palette]" as={`/${identifier.toLowerCase()}`}>
                <MdOpenInNew
                  onClick={() =>
                    track({
                      action: "click-palette",
                      category: "homepage",
                      label: identifier,
                    })
                  }
                />
              </Link>
            </abbr>
          </Box>
        )}
      </Box>
    </PaletteWrapper>
  );
};

export default Palette;
