import styled from "styled-components";
import { brightHover } from "styles/shared";

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
  /* font-weight: 700; */
  margin: 0.5rem 0;
  cursor: pointer;
  box-shadow: 0 2.5px 5px 1px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;

  ${brightHover}

  ${({ theme: { colors, spacing } }) => `
  height: ${spacing.bigger};
  background-color: ${colors.primary};
  color: ${colors.white};
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
