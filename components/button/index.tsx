import styled from "styled-components";

interface ButtonProps {
  id: string;
  children?: string;
  outlined?: boolean;
}

/**
 * StyledButton: A button component styled with styled-components
 * @return {JSX.Element} The JSX Code for the StyledButton Component
 */
const StyledButton = styled.button<ButtonProps>`
  display: block;
  width: 60%;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  box-shadow: 0 2.5px 5px 1px rgba(0, 0, 0, 0.25);
  text-align: center;

  :focus,
  :hover {
    filter: brightness(1.25);
  }

  ${({ theme: { colors, font, spacing } }) => `
  height: ${spacing.bigger};
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: ${font.default};
  `}

  ${({ outlined, theme: { colors } }) =>
    outlined &&
    `
    background-color: ${colors.white};
    color: ${colors.primary};
    border: 0.1rem solid ${colors.primary};
  `}

  @media (min-width: 512px) {
    width: 80%;
  }
`;

/**
 * Button: A button component with default style
 * @return {JSX.Element} The JSX Code for the Button Component
 */
export const Button = (props: ButtonProps) => (
  <StyledButton type="button" {...props}>
    {props.children}
  </StyledButton>
);
