import { Subject, PageBlock, PageImage, Description } from "styles";
import { Button, Layout, Wrapper } from "components";

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function Home() {
  return (
    <Layout>
      <PageBlock>
        <Subject id="home__subject">Boas vindas a Lacrei Saúde</Subject>
        <Description id="home__description">
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
        </Description>
        <Wrapper gap={2}>
          <Button id="home__button__user">Pessoa usuária</Button>
          <Button id="home__button__professional" outlined>
            Profissional
          </Button>
        </Wrapper>
      </PageBlock>
      <PageImage>
        <img
          id="home__image__doctor"
          src="/assets/svg/female-doctor.svg"
          alt="Imagem de uma médica"
        />
      </PageImage>
    </Layout>
  );
}
