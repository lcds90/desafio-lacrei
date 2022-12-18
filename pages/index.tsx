import { Container, Main, Title, Description, CodeTag } from "styles";
import { Cards, Footer, Header } from "components";

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>page,ms/index.tsx</CodeTag>
        </Description>

        <Cards />
      </Main>
      <Footer />
    </Container>
  );
}
