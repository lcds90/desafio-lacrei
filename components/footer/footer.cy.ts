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
});

export {};
