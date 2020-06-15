import styled, { css } from "styled-components";
import { Flex, Box } from "reflexbox";

export const PaletteWrapper = styled(Flex)`
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.17);
`;

export const PaletteHeader = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
`;

export interface ColorProps {
  colorSrc: string;
  index: number;
  contrast: "light" | "dark";
}

export const Color = styled(Box)<ColorProps>`
  width: 120px;
  height: 100px;
  line-height: 100px;
  letter-spacing: 2px;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  transition: z-index 0.3s ease-out;
  text-align: center;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    border-radius: 2px;
  }
  ${({ colorSrc, index, contrast }) => css`
    background: ${colorSrc};
    color: ${colorSrc};
    z-index: ${index};
    left: ${100 * index}px;
    &:hover {
      color: #000000;
      ${contrast === "dark" &&
      css`
        color: #ffffff;
      `}
    }
    @media (max-width: 768px) {
      left: ${25 * index}px;
    }
  `}
  &:hover {
    z-index: 100;
  }
`;

export const ColorContainer = styled.div`
  position: relative;
  height: 120px;
  @media (max-width: 768px) {
    height: 40px;
  }
`;

export const Keyword = styled.span`
  background: rgba(0, 0, 0, 0.05);
  margin-right: 4px;
  padding: 4px;
  cursor: pointer;
`;
