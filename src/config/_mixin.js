import { css } from "styled-components";

export const color = {
  highlightColor: "#B9F9F9",
  darkGreyColor: "#707070",
  defaultColor: "#ABABAB",
  lightGreyColor: "#E7E7E7",
  dangerColor: "#f50057",
  backgroundColor: "#F7F7F7"
};

export const fontFamily = {
  default: "'Jeju Myeongjo', serif !important"
};

export const sizes = {
  desktop: 2560,
  mobile: 420
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const fontSize = {};
