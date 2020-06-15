import React from "react";
import { Flex, Box } from "reflexbox";

import { FaGithub } from "react-icons/fa";

import { TitleBarWrapper } from "./styles";

const TitleBar: React.FC = () => {
  return (
    <TitleBarWrapper>
      <Flex>
        <Box width={9 / 10}>
          <img src="/logo.svg" height="32px" />
          <h1>Colors Palette</h1>
        </Box>
        <Box width={1 / 10} textAlign="right">
          <a href="https://github.com/maddhruv/colorspalette">
            <FaGithub />
          </a>
        </Box>
      </Flex>
    </TitleBarWrapper>
  );
};

export default TitleBar;
