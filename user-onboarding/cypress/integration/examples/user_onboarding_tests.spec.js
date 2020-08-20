describe ('First Test', () =>{
it('can navigate to localhost', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost')
})

})

describe('Test Name', () => {
    it('can fill in name inputs', () => {
        cy.get('input[name="first_name"]')
        .type('Ian')
        .should('have.value', 'Ian')
        cy.get('input[name="last_name"]')
        .type('Brander')
        .should('have.value', 'Brander')
    })
})