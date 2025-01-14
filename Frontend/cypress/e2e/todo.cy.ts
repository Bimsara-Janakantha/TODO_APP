describe("Todo Page", () => {
  it("should display the list of todos", () => {
    cy.visit("/mytodo");
    cy.get('[data-testid="todo-card"]').should("have.length.greaterThan", 0); // Adjust based on number of cards
  });

  it("should allow adding a new todo", () => {
    cy.visit("/mytodo");
    cy.get('[data-testid="create-new-todo-button"]').click();
    cy.get('input[name="title"]').type("New Todo");
    cy.get('textarea[name="content"]').type("This is a new todo.");
    cy.get('input[name="dueDate"]').type("2025-01-15");
    cy.get("button").contains("Add New").click();
    cy.get(".todo-card").should("contain", "New Todo");
  });

  it("should delete a todo", () => {
    cy.visit("/mytodo");
    cy.get(".todo-card")
      .first()
      .find("button")
      .contains("Mark as Done")
      .click();
    cy.get(".todo-card").should("have.length.lessThan", 3); // Assuming you started with 3 cards
  });
});
