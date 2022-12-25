import { ID } from "./header.enum";

describe("🧪 Nav tests", () => {
  it("should exist ✨", () => {
    cy.visit("/");

    const elements = [
      ID.HEADER,
      ID.LINK_HOME,
      ID.LINK_USER,
      ID.LINK_PROFESSIONAL,
    ];

    elements.forEach((element) => {
      cy.get(`#${element}`).should("exist");
    });
  });
});

export {};
