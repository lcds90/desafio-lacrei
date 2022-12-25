import styled from "styled-components";
import { ID } from "./header.enum";
import { Link } from "../link";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lighter};
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 10px;
  max-height: 4rem;

  @media (min-width: 512px) {
    grid-template-columns: max-content 1fr;
    padding: 0.5rem 4rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-decoration: none;

  @media (min-width: 512px) {
    justify-self: start;
  }
`;

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  color: black;
  font-size: ${({ theme }) => theme.font.small};
  gap: 15px;

  @media (min-width: 512px) {
    justify-self: flex-end;
    font-size: ${({ theme }) => theme.font.default};
    gap: 30px;
  }
`;

export const Header = () => {
  return (
    <StyledHeader id={ID.HEADER}>
      <Link isActive primary bold id={ID.LOGO} href="/">
        <Title>Lacrei</Title>
      </Link>
      <Wrapper>
        <Link primary bold href="/" id={ID.LINK_HOME}>
          Home
        </Link>
        <Link primary bold href="/pessoa-usuaria" id={ID.LINK_USER}>
          Pessoa Usuária
        </Link>
        <Link primary bold href="/profissional" id={ID.LINK_PROFESSIONAL}>
          Profissional
        </Link>
      </Wrapper>
    </StyledHeader>
  );
};
