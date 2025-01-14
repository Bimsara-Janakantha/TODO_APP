describe("Footer", () => {
  it("should display the copyright information", () => {
    cy.visit("/");
    cy.get("footer").contains("All rights reserved © 2025 PeraBytes"); // Adjust text based on your footer
  });

  it("should have correct styles", () => {
    cy.visit("/");
    cy.get("footer").should("have.css", "text-align", "center");
  });
});
