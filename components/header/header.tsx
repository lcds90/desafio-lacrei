import Link from "next/link";
import styled from "styled-components";
import { ID } from "./header.enum";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  padding: 0.5rem;
  height: 5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lighter};
  color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  font-size: ${({ theme }) => theme.font.small};
  gap: 15px;
`;

const HeaderComponent = () => {
  return (
    <Header id={ID.HEADER}>
      <Link id={ID.LOGO} href="/">
        <Title>Lacrei</Title>
      </Link>
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
