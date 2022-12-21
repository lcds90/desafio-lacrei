describe("📃 Pages tests", () => {
  describe("🧪 Navbar", () => {
    it("✅ title", () => {
      cy.visit("/");
      const h1 = cy.get("h1");
      const a = cy.get("h1 > a");
      h1.should("exist");
      h1.should("have.text", "Lacrei");
      a.should("have.attr", "href", "/");
      a.click();
      h1.should("exist");
      h1.should("have.text", "Lacrei");
    });

    it("🔗 links", () => {
      cy.visit("/");
      const links = cy.get("nav > a");
      links.should("have.length", 3);

      const linkHome = cy.get("nav > a:nth-child(1)");
      linkHome.should("exist");
      linkHome.should("have.text", "Home");
      linkHome.should("have.attr", "href", "/");

      const linkUser = cy.get("nav > a:nth-child(2)");
      linkUser.should("exist");
      linkUser.should("have.text", "Pessoa Usuária");
      linkUser.should("have.attr", "href", "/pessoa-usuaria");

      const linkProfessional = cy.get("nav > a:nth-child(3)");
      linkProfessional.should("exist");
      linkProfessional.should("have.text", "Profissional");
      linkProfessional.should("have.attr", "href", "/profissional");
    });

    it("🏘️ home", () => {
      cy.visit("/");
      const home = cy.get("#home__welcome");
      home.should("exist");
      home.should("have.text", "Boas vindas a Lacrei Saúde");

      const homeDescription = cy.get("#home__description");
      homeDescription.should("exist");
      homeDescription.should(
        "have.text",
        "Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
      );

      const homeButtonUser = cy.get("#home__button__user");
      homeButtonUser.should("exist");
      homeButtonUser.should("have.text", "Pessoa usuári");

      const homeButtonProfessional = cy.get("#home__button__professional");
      homeButtonProfessional.should("exist");
      homeButtonProfessional.should("have.text", "Profissional");

      const image = cy.get("#home__image__doctor");
      image.should("exist");
      image.should("have.attr", "src", "/assets/svg/female-doctor.svg");
      image.should("have.attr", "alt", "Imagem de uma médica");
    });
  });
});

export {};
