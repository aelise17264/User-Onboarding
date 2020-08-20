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

describe('Test Email', () => {
    it('can fill in email input', () => {
        cy.get('input[name="email"]')
        .type('ianjbrander@gmail.com')
        .should('have.value', 'ianjbrander@gmail.com')
           })
})

describe('Test Password', () => {
    it('can fill in password input', () => {
        cy.get('input[name="password"]')
        .type('ABC123')
        .should('have.value', 'ABC123')
           })
})

describe('Test Terms & Services Checkbox', () => {
    it('can check terms & services checkbox', () => {
        cy.get('[type="checkbox"]').check()
    })
})

describe('Submit new form', () => {
    it('submit button is enabled', () => {
        cy.get('.submit').click()
        
    })
})