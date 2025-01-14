describe("API Testing", () => {
  it("should fetch todos from the API", () => {
    cy.request("GET", "http://localhost:5000/api/todos")
      .its("status")
      .should("eq", 200); // Check if the response is successful
  });

  it("should add a new todo via API", () => {
    cy.request("POST", "http://localhost:5000/api/todos", {
      title: "Test Todo",
      content: "Content for test todo",
      dueDate: "2025-01-15",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq("Test Todo");
    });
  });

  it("should delete a todo via API", () => {
    cy.request("DELETE", "http://localhost:5000/api/todos", { id: 1 })
      .its("status")
      .should("eq", 200); // Ensure the response is successful
  });
});
