import styled, { css } from "styled-components";
import { Flex, Box } from "reflexbox";

export const PaletteWrapper = styled(Flex)<{ isHomePage: boolean }>`
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.17);
  margin-bottom: 12px !important;
  ${({ isHomePage }) => css`
    ${!isHomePage &&
    css`
      height: 85vh;
    `}
  `}
`;

export const PaletteHeader = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
`;

export interface ColorProps {
  colorSrc: string;
  index: number;
  contrast: "light" | "dark";
}

export const Color = styled(Box)<ColorProps>`
  width: 100%;
  height: 95%;
  letter-spacing: 2px;
  cursor: pointer;
  transition: z-index 0.3s ease-out;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 95%;
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
      `};
    }
    @media (max-width: 768px) {
      left: ${38 * index}px;
    }
  `}
  &:hover {
    z-index: 50;
  }
`;

export const ColorContainer = styled(Flex)<{ isHomePage: boolean }>`
  position: relative;
  height: 120px;
  @media (max-width: 768px) {
    height: 60px;
  }
  ${({ isHomePage }) => css`
    ${!isHomePage &&
    css`
      height: 70vh;
      line-height: 70vh;
      @media (max-width: 768px) {
        width: 100%;
        height: 70vh;
        line-height: 70vh;
      }
    `}
  `}
`;

export const Keyword = styled.span`
  background: rgba(0, 0, 0, 0.05);
  margin-right: 4px;
  padding: 4px;
  cursor: pointer;
  font-size: 0.8rem;
`;
