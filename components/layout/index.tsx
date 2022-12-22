import { Container, Main } from "styles";
import { Footer, Header } from "components";

/**
 * Layout: The Layout for pages of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
