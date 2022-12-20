import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.spacing.default} 0;

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
