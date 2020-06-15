import React, { useEffect, useState } from "react";
import { Flex, Box } from "reflexbox";
import Clipboard from "clipboard";

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
  name,
  colors,
  keywords,
  handleKeyword,
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

  return (
    <PaletteWrapper p={16} mb={16} flexDirection="column">
      <Box mb={16}>
        <PaletteHeader>{name}</PaletteHeader>
      </Box>
      <Box>
        <ColorContainer>
          {colors.map((color, index) => (
            <Color
              className="copy"
              data-clipboard-text={color}
              color={color}
              key={color}
              index={index}
            />
          ))}
        </ColorContainer>
      </Box>
      <Box>
        {keywords.map((keyword) => (
          <Keyword key={keyword} onClick={() => handleKeyword(keyword)}>
            {keyword}
          </Keyword>
        ))}
      </Box>
      <Toast open={toastOpen}>Copied</Toast>
    </PaletteWrapper>
  );
};

export default Palette;
