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
}

export const links: ILink[] = [
  {
    link: "https://www.facebook.com/lacrei",
    src: "/assets/facebook.svg",
    alt: "Facebook Logo",
    id: ID.FACEBOOK,
  },
  {
    link: "https://www.instagram.com/lacrei",
    src: "/assets/instagram.svg",
    alt: "Instagram Logo",
    id: ID.INSTAGRAM,
  },
  {
    link: "https://www.linkedin.com/company/lacrei",
    src: "/assets/linkedin.svg",
    alt: "Linkedin Logo",
    id: ID.LINKEDIN,
  },
];
