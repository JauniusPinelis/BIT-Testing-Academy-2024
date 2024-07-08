describe('Loading products page', () => {
    it('Displays the products table', () => {
        cy.visit('https://commitquality.com/')
    })

    it('Display the products filter', () => {
        cy.visit('https://commitquality.com/')
        // Is the input being displayed?
        // Is the filter button being displayed?
        // Is the Reset button being displayed?
        cy.get("button.filter-button").should("be.visible") // I selected this by <button> and class=filter-button
        cy.contains("button", "Filter").should("be.visible") // I selected this by <button> and text=Filter
        cy.get("button[data-testid=reset-filter-button]").should("be.visible")
        // I selected this by <button> and attribute data-testid
    })

    it('Display the show more button', () => {
        cy.visit('https://commitquality.com/')
    })

    it('Display Add a Product button', () => {
        cy.visit('https://commitquality.com/')
    })
})

describe('products filter', () => {
    it('empty filter should display the first 10 products', () => {
        cy.visit('https://commitquality.com/')
    })

    it('Entering Product 2 displays Product 2 items', () => {
        cy.visit('https://commitquality.com/')
    })

    it('Entering non-existing product displays "No Products found" ', () => {
        cy.visit('https://commitquality.com/')
    })

    it('Clicking reset empties the "filter" input', () => {
        cy.visit('https://commitquality.com/')
    })

    it('Clicking reset empties displays the first 10 products', () => {
        cy.visit('https://commitquality.com/')
    })
})
