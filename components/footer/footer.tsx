import Link from "next/link";
import styled from "styled-components";
import { IThemeParam } from "interfaces";
import { devLinks, ID, links } from "./footer.enum";

const Footer = styled.footer`
  display: grid;
  grid: 1fr 1rem / repeat(2, 1fr);
  margin: 0 4rem;
  height: 100%;

  color: ${({ theme }: IThemeParam) => theme.colors.primary};
  border-top: 1px solid ${({ theme }: IThemeParam) => theme.colors.primary};

  .footer-links-wrapper {
    display: flex;
    color: darkgray;
    font-weight: 400;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 1rem;
    gap: 1rem;
    font-size: 0.75rem;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1.5rem;
  }

  .links-wrapper {
    display: flex;
    flex-flow: row nowrap;
    gap: 2.5rem;
    color: black;
    font-size: 1rem;
    font-weight: 500;
  }

  .social-wrapper {
    width: 100%;
    display: flex;
    gap: 2rem;
  }

  .final-app {
    font-weight: 400;
    color: #656565;
    font-size: 0.75rem;
  }
`;

const FooterComponent = () => {
  return (
    <Footer id={ID.FOOTER}>
      <div className="container">
        <section className="links-wrapper">
          <Link href="/" id={ID.LINK_HOME}>
            Home
          </Link>
          <Link href="/about" id={ID.LINK_USER}>
            Pessoa Usuária
          </Link>
          <Link href="/about" id={ID.LINK_PROFESSIONAL}>
            Profissional
          </Link>
        </section>
        <section className="social-wrapper">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.alt}
              target="_blank"
              rel="noopener noreferrer"
              id={link.id}
            >
              <img src={link.src} alt={link.alt} />
            </a>
          ))}
        </section>
        <Link
          className="final-app"
          href="https://desafio-lacrei-five.vercel.app"
        >
          Desafio Front-end Lacrei
        </Link>
      </div>
      <div className="footer-links-wrapper">
        {process.env.NEXT_PUBLIC_ENV !== "production" &&
          devLinks.map((link) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              key={link.id}
              id={link.id}
            >
              {link.text}
            </Link>
          ))}
      </div>
    </Footer>
  );
};

export default FooterComponent;
