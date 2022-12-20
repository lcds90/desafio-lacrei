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

  @media (min-width: 520px) {
    gap: 0;
  }
`;

export const Subject = styled.h2`
  font-size: ${({ theme }) => theme.font.large};
  color: ${({ theme }) => theme.colors.base};

  @media (min-width: 520px) {
    font-size: ${({ theme }) => theme.font.big};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.spacing.default} 0;

  @media (min-width: 520px) {
    font-size: ${({ theme }) => theme.font.default};
  }
`;

export const PageBlock = styled.section`
  height: 100%;
  width: 100%;

  @media (min-width: 520px) {
    display: flex;
    flex-direction: column;
    text-align: justify;
    width: 90%;
    padding: 1rem 0;
  }
`;

export const PageImage = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  padding-bottom: 0.75rem;

  img {
    max-width: 550px;
    width: 100%;
    height: auto;
  }
`;
