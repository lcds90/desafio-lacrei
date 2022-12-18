import Link from "next/link";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 4rem;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};

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

interface Link {
  link: string;
  src: string;
  alt: string;
}

const links: Link[] = [
  {
    link: "https://www.facebook.com/lacrei",
    src: "/assets/facebook.svg",
    alt: "Facebook Logo",
  },
  {
    link: "https://www.instagram.com/lacrei",
    src: "/assets/instagram.svg",
    alt: "Instagram Logo",
  },
  {
    link: "https://www.linkedin.com/company/lacrei",
    src: "/assets/linkedin.svg",
    alt: "Linkedin Logo",
  },
];

const FooterComponent = () => {
  return (
    <Footer>
      <div className="container">
        <section className="links-wrapper">
          <Link href="/">Home</Link>
          <Link href="/about">Pessoa Usuária</Link>
          <Link href="/about">Profissional</Link>
        </section>
        <section className="social-wrapper">
          {links.map((link) => (
            <a
              href={link.link}
              key={link.alt}
              target="_blank"
              rel="noopener noreferrer"
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
