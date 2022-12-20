import { ILink } from "interfaces";

export enum ID {
  FOOTER = "footer__element",
  LOGO = "logo",
  LINK_HOME = "footer__link-home",
  LINK_USER = "footer__link-user",
  LINK_PROFESSIONAL = "footer__link-professional",
  FACEBOOK = "footer__facebook",
  INSTAGRAM = "footer__instagram",
  LINKEDIN = "footer__linkedin",
  LINK_FIGMA = "footer__link-figma",
  LINK_GITHUB = "footer__link-github",
  LINK_FINAL_APP = "footer__link-final-app",
}

export const links: ILink[] = [
  {
    href: "https://www.instagram.com/lacrei",
    src: "/assets/svg/instagram.svg",
    alt: "Instagram Logo",
    id: ID.INSTAGRAM,
  },
  {
    href: "https://www.facebook.com/lacrei",
    src: "/assets/svg/facebook.svg",
    alt: "Facebook Logo",
    id: ID.FACEBOOK,
  },
  {
    href: "https://www.linkedin.com/company/lacrei",
    src: "/assets/svg/linkedin.svg",
    alt: "Linkedin Logo",
    id: ID.LINKEDIN,
  },
];

export const devLinks: ILink[] = [
  {
    href: "https://github.com/users/lcds90/projects/8",
    id: ID.LINK_GITHUB,
    text: "Projeto Github",
  },
  {
    href: "https://www.figma.com/file/rinPq1hNUad5M5P4B9Sl23/Desafio?node-id=2%3A15&t=apIxxo3pcKbKGRX4-0",
    id: ID.LINK_FIGMA,
    text: "Projeto Figma",
  },
];
