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

  describe("🧪 Footer links", () => {
    it("should show dev links ✅", () => {
      cy.visit("/");
      if (process.env.NODE_ENV === "development") {
        cy.get(`#${ID.LINK_GITHUB}`).should("exist");
        cy.get(`#${ID.LINK_FIGMA}`).should("exist");
      }
    });

    it("should not show dev links ✅", () => {
      cy.visit("/");
      if (process.env.NODE_ENV === "production") {
        cy.get(`#${ID.LINK_GITHUB}`).should("not.exist");
        cy.get(`#${ID.LINK_FIGMA}`).should("not.exist");
      }
    });
  });
});

export {};
