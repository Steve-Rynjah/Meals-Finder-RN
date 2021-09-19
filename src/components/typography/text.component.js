import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.regular};
`;

const label = (theme) => `
    color: ${theme.colors.text.inverse};
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const restaurant_name = (theme) => `
    color: ${theme.colors.text.primary};
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const address = (theme) => `
    font-family: ${theme.fonts.body}
    font-size: ${theme.fontSizes.caption}
`; 

const favorites = (theme) => `
    color: ${theme.colors.text.inverse};
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.regular};
`;

const favorites_header = (theme) => `
    color: ${theme.colors.text.inverse};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.bold};
`;


const variants = {
  body,
  label,
  caption,
  error,
  hint,
  address,
  favorites,
  favorites_header,
  restaurant_name
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};