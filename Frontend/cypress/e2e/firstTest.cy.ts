describe("cypress demo", () => {
  // Test Element 01
  it("Renders the welcome message on the screen", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-testid="cypress-welcomeMsg"]')
      .should("exist")
      .should("have.text", "Welcome Back");
  });

  // Test Element 02
  it("Renders the logo on the home screen", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-testid="cypress-pbLogo"]').should("exist");
  });
});
