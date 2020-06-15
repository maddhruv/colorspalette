import styled, { css } from "styled-components";

export const TitleBarWrapper = styled.div`
  color: #fff;
  font-size: 36px;
  padding: 8px;
  margin-bottom: 22px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.17);
  ${({ theme: { colors } }) => css`
    background: ${colors.primary};
  `}
  h1 {
    display: inline;
  }
`;
