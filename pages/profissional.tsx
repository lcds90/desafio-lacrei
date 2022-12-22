import { Subject, PageBlock, PageImage, Description } from "styles";
import { Layout } from "components";

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function Home() {
  return (
    <Layout>
      <PageBlock>
        <Subject id="professionals__subject">Profissional</Subject>
        <Description id="professionals__description" bordered>
          Buscamos recrutar pessoas profissionais da saúde que entendam as
          necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </Description>
      </PageBlock>
      <PageImage>
        <img
          id="professionals__image__professionals"
          src="/assets/svg/professionals.svg"
          alt="Grupo de doutores"
        />
      </PageImage>
    </Layout>
  );
}
