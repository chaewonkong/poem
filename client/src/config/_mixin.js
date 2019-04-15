export const color = {
  highlightColor: "#B9F9F9",
  darkGreyColor: "#707070",
  defaultColor: "#ABABAB",
  lightGreyColor: "#E7E7E7",
  dangerColor: "#f50057"
};

export const fontFamily = {
  fontFamily: "'Jeju Myeongjo', serif !important"
};

export const sizes = {
  desktop: 992,
  phone: 420
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
