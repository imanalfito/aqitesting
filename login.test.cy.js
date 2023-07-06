/// <reference types="cypress" />

 describe('login test', () => {
    before (() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    });
    it('Should display Error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    it('Should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()
        })
    });
    it('should logout from the application', ()=> {
        //TODO
        cy.contains('username').click(); // Klik nama pengguna di navigasi atas
        cy.get('#logout_link').click(); // Klik tombol Sign out
        cy.url().should('include', 'index.html'); // Memastikan bahwa pengguna dialihkan ke halaman utama setelah logout
        cy.get('#signin_button').should('be.visible') // Memastikan bahwa tombol Sign in ditampilkan setelah logout
         });
    });
