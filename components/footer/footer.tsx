import Link from "next/link";
import styled from "styled-components";
import { ID, links } from "./footer.enum";

const Footer = styled.footer`
  display: grid;
  margin: 1rem;
  height: 100%;

  color: ${({ theme }) => theme.colors.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.light};

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .links-wrapper {
    display: flex;
    flex-direction: column;
    color: black;
    font-size: 1rem;
    gap: 5px;
    padding-top: 1rem;

    a {
      font-size: 0.9rem;
      font-weight: 400;
    }
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
          target="_blank"
          rel="noopener noreferrer"
          className="final-app"
          href="https://desafio-lacrei-five.vercel.app"
        >
          Desafio Front-end Lacrei
        </Link>
      </div>
    </Footer>
  );
};

export default FooterComponent;
