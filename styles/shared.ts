import styled, { css } from "styled-components";
import NextLink from "next/link";

export const brightHover = css`
  transition: opacity 0.2s ease-in-out;

  :focus,
  :hover {
    opacity: 0.6;
  }
`;

interface LinkProps {
  active?: boolean;
  primary?: boolean;
  bold?: boolean;
}

export const Link = styled(NextLink)<LinkProps>`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;

  ${({ active, bold, primary, theme }) => `
    color: ${primary && active ? theme.colors.primary : theme.colors.base};
    font-weight: ${active || bold ? 700 : 400};
  `}

  ${brightHover}

  @media (min-width: 512px) {
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  display: grid;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  gap: 50px;
  align-items: center;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  @media (min-width: 512px) {
    gap: 25px;
  }

  @media (min-width: 1040px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem 6rem 0 4rem;
  }
`;

export const Subject = styled.h2`
  font-size: ${({ theme }) => theme.font.large};
  color: ${({ theme }) => theme.colors.base};
  max-width: 550px;

  @media (min-width: 512px) {
    font-size: ${({ theme }) => theme.font.big};
  }

  @media (min-width: 1040px) {
    font-size: ${({ theme }) => theme.font.bigger};
  }
`;

interface DescriptionProps {
  bordered?: boolean;
}

export const Description = styled.p<DescriptionProps>`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.spacing.default} 0;

  ${({ bordered, theme }) =>
    bordered &&
    `
    border-left: 5px solid ${theme.colors.primary};
    padding-left: 1rem;
  `}

  @media (min-width: 512px) {
    font-size: ${({ theme }) => theme.font.default};
  }

  @media (min-width: 1040px) {
    font-size: ${({ theme }) => theme.font.large};
  }
`;

export const PageBlock = styled.section`
  height: 100%;
  width: 100%;

  @media (min-width: 512px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 512px;
  }
`;

export const PageImage = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  padding-bottom: 0.75rem;

  @media (min-width: 512px) {
    padding-bottom: 0;
    align-items: flex-end;
  }

  img {
    max-width: 550px;
    width: 100%;
    height: auto;
  }
`;
