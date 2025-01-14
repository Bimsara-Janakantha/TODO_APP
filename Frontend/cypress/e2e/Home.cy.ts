describe("Home Page", () => {
  it("should load the Home Page", () => {
    cy.visit("/home");
    cy.contains("TODO APP"); // Ensure the page title is present
  });

  it('should navigate to Todo page when "View My TODO" button is clicked', () => {
    cy.visit("/");
    cy.get("button").contains("View My TODO").click();
    cy.url().should("include", "/mytodo"); // Ensure navigation to the Todo page
  });

  it("should display the welcome message for logged-in users", () => {
    cy.visit("/");
    cy.contains("Welcome Back"); // Adjust if your text differs
  });
});
