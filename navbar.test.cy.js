/// <reference types="cypress" />

describe('Navbar test', () => {
    before(()=> {
        cy.visit('http://zero.webappsecurity.com/')
    })
    it('Show display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        //cy.url().should('include', 'online-banking.html')
        //cy.get('h1').should('be.visible')
        cy.get('#onlineBankingMenu').should('have.class', 'active')
        cy.get('h1').should('contain', 'Online Banking')
    });
    it('Show display feedback content', () => {
        cy.get('#feedback').click()
        //cy.url().should('include', 'feedback.html')
        cy.get('#feedback').should('content.class', 'active')
        cy.get('form#feedback-form').should('be.visible')
    });
    it('Show menu home content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('.navbar').should('be.visible')
    });
})