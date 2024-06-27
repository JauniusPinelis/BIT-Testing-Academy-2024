describe('Loading home page', () => {
  it('Displays Kitchen Sink Header', () => {
    cy.visit('https://example.cypress.io')
    cy.contains("Kitchen Sink").should("be.visible")
  })

  it('Displays Commands', () => {
    cy.visit('https://example.cypress.io')
    cy.contains("h2", "Commands").should("be.visible")
  })

  it('Displays Commands 2', () => {
    cy.visit('https://example.cypress.io')
    cy.contains("h5", "Commands").should("be.visible")
  })
})