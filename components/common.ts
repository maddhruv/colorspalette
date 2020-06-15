import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 0vh 20vw 3vh 20vw;
  @media (max-width: 768px) {
    padding: 0vh 5vw 5vh 5vw;
  }
`;

export const Toast = styled.div<{ open: boolean }>`
  z-index: 99;
  position: fixed;
  left: 50%;
  padding: 10px 24px;
  font-weight: 500;
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.1),
    0px 3px 6px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  top: 0;
  transform: translate(-50%, -120px);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  ${({ open, theme: { colors } }) => css`
    background: #fff;
    color: ${colors.primary};
    ${open &&
    css`
      transform: translate(-50%, 90px);
    `};
  `}
`;

export const Input = styled.input`
  width: 99%;
  height: 32px;
  padding-left: 8px;
  font-size: 22px;
`;
