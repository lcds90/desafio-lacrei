import {
  Container,
  Main,
  Subject,
  PageBlock,
  PageImage,
  Description,
} from "styles";
import { Footer, Header } from "components";
import styled from "styled-components";

interface ButtonProps {
  outlined?: boolean;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  margin-top: ${({ theme }) => theme.spacing.big};
  padding: ${({ theme }) => theme.spacing.default};
  width: 100%;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 5rem;
    width: 100%;
    padding: 0;
  }
`;

const Button = styled.button<ButtonProps>`
  ${({ theme: { colors, font, spacing } }) => `
  display: block;
  width: 60%;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  box-shadow: 0 2.5px 5px 1px rgba(0, 0, 0, 0.25);
  text-align: center;

  :focus,
  :hover {
    filter: brightness(1.25);
  }

  height: ${spacing.bigger};
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: ${font.default};

  `}

  ${({ outlined, theme: { colors } }) =>
    outlined &&
    `
    background-color: ${colors.white};
    color: ${colors.primary};
    border: 0.1rem solid ${colors.primary};
  `}

  @media (min-width: 520px) {
    width: 100%;
  }
`;

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <PageBlock>
          <div>
            <Subject>Boas vindas a Lacrei Saúde</Subject>
            <Description>
              Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
            </Description>
          </div>
          <Wrapper>
            <Button>Pessoa usuária</Button>
            <Button outlined>Profissional</Button>
          </Wrapper>
        </PageBlock>
        <PageImage>
          <img src="/assets/svg/female-doctor.svg" alt="Doutora" />
        </PageImage>
      </Main>
      <Footer />
    </Container>
  );
}
