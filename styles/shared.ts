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
  justify-content: space-between;
  height: 100%;
  padding: 0 4rem;
`;

export const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const PageSubject = styled.h2`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
`;

export const PageBlock = styled.section`
  height: 100%;
`

export const PageImage = styled.section`
  display: flex;
  justify-self: center;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 0.75rem;

  img {
    width: 540px;
  }
`
