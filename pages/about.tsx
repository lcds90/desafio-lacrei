import Link from "next/link";
import { Container, Main, Title, Description } from "styles";

/**
 * About: The About page of the web app
 * @return {JSX.Element} The JSX Code for the About Page
 */
export default function About() {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">&larr; Go Back</Link>
        </Description>
      </Main>
    </Container>
  );
}
