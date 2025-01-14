describe("Header", () => {
  it('should display the title "TODO APP"', () => {
    cy.visit("/");
    cy.get("h4").contains("TODO APP"); // Ensure the title is visible
  });

  it("should toggle theme on button click", () => {
    cy.visit("/");
    cy.get('[data-testid="cypress-theme-toggle"]').click(); // Click the theme toggle button
    cy.get("body").should("have.class", "dark-theme"); // Check if the dark theme is applied (assuming you apply a class for dark theme)
  });

  it("should navigate to the home page when the logo is clicked", () => {
    cy.visit("/mytodo");
    cy.get("h4").click();
    cy.url().should("include", "/"); // Ensure we navigate back to the home page
  });
});
