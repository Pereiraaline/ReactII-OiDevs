import styled, { css } from "styled-components";

const textCss = css`
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => (props.bold ? "800" : "")};
  margin-top: ${(props) => (props.marginTop ? "10px" : "")};
  ${(props) => (props.size === "small" ? "font-size: 12px;" : "")};
`;

export const Text = styled.div`
  ${textCss}
`;

export const TextLink = styled.a`
  ${textCss};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
