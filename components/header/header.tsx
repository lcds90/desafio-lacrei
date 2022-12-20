import Link from "next/link";
import styled from "styled-components";
import { ID } from "./header.enum";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lighter};
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 10px;

  @media (min-width: 512px) {
    grid-template-columns: max-content 1fr;
    grid-template-rows: 3rem;
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

const HeaderComponent = () => {
  return (
    <Header id={ID.HEADER}>
      <Title>
        <Link id={ID.LOGO} href="/">
          Lacrei
        </Link>
      </Title>
      <Wrapper>
        <Link href="/" id={ID.LINK_HOME}>
          Home
        </Link>
        <Link href="/pessoa-usuaria" id={ID.LINK_USER}>
          Pessoa Usuária
        </Link>
        <Link href="/profissional" id={ID.LINK_PROFESSIONAL}>
          Profissional
        </Link>
      </Wrapper>
    </Header>
  );
};

export default HeaderComponent;
