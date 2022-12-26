import { Subject, PageBlock, PageImage, Description } from "styles";
import { Layout } from "components";
import Image from "next/image";

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function Home() {
  return (
    <Layout>
      <PageBlock>
        <Subject id="professional__subject">Profissional</Subject>
        <Description id="professional__description" bordered>
          Buscamos recrutar pessoas profissionais da saúde que entendam as
          necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </Description>
      </PageBlock>
      <PageImage>
        <Image
          width={550}
          height={550}
          id="professional__image__group"
          src="/assets/svg/professionals.svg"
          alt="Grupo de profissionais da área da saúde"
        />
      </PageImage>
    </Layout>
  );
}
