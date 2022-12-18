import Link from "next/link";
import styled from "styled-components";
import { IThemeParam } from "interfaces";
import { ID, links } from "./footer.enum";

const Footer = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 4rem;
  height: 100%;
  color: ${({ theme }: IThemeParam) => theme.colors.primary};
  border-top: 1px solid ${({ theme }: IThemeParam) => theme.colors.primary};

  .footer-links-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    color: black;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    align-items: flex-start;
    flex-wrap: nowrap;
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
              href={link.link}
              key={link.alt}
              target="_blank"
              rel="noopener noreferrer"
              id={link.id}
            >
              <img src={link.src} alt={link.alt} />
            </a>
          ))}
        </section>
      </div>
      <div className="footer-links-wrapper"></div>
    </Footer>
  );
};

export default FooterComponent;
