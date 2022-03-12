// import mount from "@vue/cli-plugin-e2e-cypress";
// import Header from "../../../src/components/Header.vue";

// describe("Renders Header", () => {
//   it("If I open homcepage, App should render", () => {
//     mount(Header);
//     cy.contains(" Bernice");
//   });
// });

describe("Renders App", () => {
  before(() => {
    cy.visit("/");
  });

  it.only("If I open homepage, App should render", () => {
    cy.contains("Events");
  });
});
