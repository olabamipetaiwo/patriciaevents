import faker from "faker";

describe("Home", () => {
  before(() => {
    cy.visit("/");
  });

  it.only("It should filter events throuhgh search input", () => {
    cy.contains("Events");
  });

  it.only("It should filter events throuhgh search input", () => {
    let eventTitle = faker.random.word();
    cy.getElem("saerchInput").type(eventTitle);
  });
});
