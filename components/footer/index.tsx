import styled from "styled-components";
import { Link } from "components/link";
import { ID, links } from "./footer.enum";

const StyledFooter = styled.footer`
  margin: 0 1rem;
  padding: 1rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  color: ${({ theme }) => theme.colors.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.light};

  @media (min-width: 512px) {
    margin: 0 4rem;
  }
  .links-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 1rem;

    @media (min-width: 512px) {
      flex-direction: row;
      gap: 2rem;
    }
  }

  .social-wrapper {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: baseline;

    a {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    }
    a:last-child {
      height: 2rem;
      transition: filter 0.5s ease-in-out;
      filter: sepia(1) saturate(1) hue-rotate(100deg) brightness(1.25);

      &:hover {
        filter: none;
      }
    }

    img {
      height: 100%;
    }
  }

  .final-app {
    /* font-weight: 400; */
    color: #656565;
    font-size: 0.75rem;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter id={ID.FOOTER}>
      <section className="links-wrapper">
        <Link href="/" id={ID.LINK_HOME}>
          Home
        </Link>
        <Link href="/pessoa-usuaria" id={ID.LINK_USER}>
          Pessoa Usuária
        </Link>
        <Link href="/profissional" id={ID.LINK_PROFESSIONAL}>
          Profissional
        </Link>
      </section>
      <section className="social-wrapper">
        {links.map((link) => (
          <Link isBlank href={link.href} key={link.alt} id={link.id} bold>
            <img src={link.src} alt={link.alt} />
          </Link>
        ))}
      </section>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="final-app"
        href="https://desafio-lacrei-five.vercel.app"
      >
        Desafio Front-end Lacrei
      </a>
    </StyledFooter>
  );
};
