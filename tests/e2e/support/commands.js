Cypress.Commands.add("getElem", (input) => {
  cy.get(`[data-cy=${input}]`);
});
