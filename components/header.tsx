import Link from "next/link";
import styled from "styled-components";
import { AppTheme } from "../pages/_app";
import { Title } from "./sharedstyles";

const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.primary};

  .header-links-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
    color: black;
    font-weight: 700;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <div className="logo">
        <Title>Lacrei</Title>
      </div>
      <div className="header-links-wrapper">
        <Link href="/">Home</Link>
        <Link href="/about">Pessoa Usuária</Link>
        <Link href="/about">Profissional</Link>
      </div>
    </Header>
  );
};

export default HeaderComponent;
