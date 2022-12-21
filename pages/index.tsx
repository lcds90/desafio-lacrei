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
        <Subject>Boas vindas a Lacrei Saúde</Subject>
        <Description>
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
        </Description>
        <Wrapper gap={2}>
          <Button>Pessoa usuária</Button>
          <Button outlined>Profissional</Button>
        </Wrapper>
      </PageBlock>
      <PageImage>
        <img src="/assets/svg/female-doctor.svg" alt="Doutora" />
      </PageImage>
    </Layout>
  );
}
