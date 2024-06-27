describe('React sample application', () => {
  it('display the count button', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("count is 0").should("be.visible")
  })

  it('clicking the count button increment it by one', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("count is 0").click()
    cy.contains("count is 1").should("be.visible")
  })

  it('Succesfful data enter allows submission', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[name="name"]').type("Jaunius")
    cy.get('[name="email"]').type("JauniusPinelis@gmail.com")
    cy.get('[name="address"]').type("Mindaugo maxima")

    cy.contains('button', "Register").click()
  })
})