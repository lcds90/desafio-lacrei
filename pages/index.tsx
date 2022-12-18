import { Container, Main } from "styles";
import { Footer, Header } from "components";

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function Home() {
  return (
    <Container>
      <Header />
      <Main></Main>
      <Footer />
    </Container>
  );
}
