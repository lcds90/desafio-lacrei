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
        <Subject id="user__subject">Pessoa usuária</Subject>
        <Description id="user__description" bordered>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </Description>
      </PageBlock>
      <PageImage>
        <img
          id="user__image__users"
          src="/assets/svg/users.svg"
          alt="Grupo de pessoas usuárias"
        />
      </PageImage>
    </Layout>
  );
}
