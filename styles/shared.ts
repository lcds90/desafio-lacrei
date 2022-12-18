import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3.5rem 1fr 11rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
`;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export { Container, Main, Title, Description };
