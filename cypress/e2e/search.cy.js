describe("Search functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display search results when a valid search query is entered", () => {
    cy.get(".search-input").type("Avengers");
    cy.get(".search-button").click();

    cy.get(".movies-container").should("not.be.empty");
  });

  it("should display 'Nenhum filme favorito adicionado' message when no search results are found", () => {
    cy.get(".search-input").type("Invalid Movie");
    cy.get(".search-button").click();

    cy.get(".movies-container").should("be.empty");
    cy.contains("Nenhum filme favorito adicionado");
  });

  it("should navigate to the movie details page when a movie is clicked", () => {
    cy.get(".search-input").type("Avengers");
    cy.get(".search-button").click();

    cy.get(".movie-card").first().click();

    cy.url().should("include", "/movie/");
  });
});
