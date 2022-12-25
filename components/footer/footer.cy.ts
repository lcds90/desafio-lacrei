import { ID } from "./footer.enum";

describe("🧪 Footer tests", () => {
  it("should exist ✨", () => {
    cy.visit("/");

    const elements = [
      ID.FOOTER,
      ID.LINK_HOME,
      ID.LINK_USER,
      ID.LINK_PROFESSIONAL,
      ID.FACEBOOK,
      ID.INSTAGRAM,
      ID.LINKEDIN,
    ];

    elements.forEach((element) => {
      cy.get(`#${element}`).should("exist");
    });
  });

  it("should have the correct links 🌐", () => {
    cy.visit("/");

    cy.get(`#${ID.LINK_HOME}`).should("have.attr", "href", "/");
    cy.get(`#${ID.LINK_USER}`).should("have.attr", "href", "/pessoa-usuaria");

    cy.get(`#${ID.LINK_PROFESSIONAL}`).should(
      "have.attr",
      "href",
      "/profissional"
    );
    cy.get(`#${ID.FACEBOOK}`).should(
      "have.attr",
      "href",
      "https://www.facebook.com/lacrei.saude"
    );
    cy.get(`#${ID.INSTAGRAM}`).should(
      "have.attr",
      "href",
      "https://www.instagram.com/lacrei.saude"
    );
    cy.get(`#${ID.LINKEDIN}`).should(
      "have.attr",
      "href",
      "https://www.linkedin.com/company/lacrei"
    );
  });

  it("should be able to click on links 🔗", () => {
    cy.visit("/");

    cy.get(`#${ID.LINK_HOME}`).click();
    cy.url().should("include", "/");

    cy.get(`#${ID.LINK_USER}`).click();
    cy.url().should("include", "/pessoa-usuaria");

    cy.get(`#${ID.LINK_PROFESSIONAL}`).click();
    cy.url().should("include", "/profissional");
  });
});

export {};
