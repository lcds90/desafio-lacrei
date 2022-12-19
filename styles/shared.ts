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
  padding: 1rem;
  gap: 50px;
`;

export const Subject = styled.h2`
  font-size: ${({ theme }) => theme.font.large};
  color: ${({ theme }) => theme.colors.base};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.spacing.default} 0;
`;

export const PageBlock = styled.section`
  height: 100%;
`;

export const PageImage = styled.section`
  display: flex;
  justify-self: center;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 0.75rem;

  img {
    width: 100%;
    height: auto;
  }
`;
