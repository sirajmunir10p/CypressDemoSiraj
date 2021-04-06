/// <reference types = "Cypress" />

import loginPage from '../PageObjects/loginPage'

describe('Test Suite', function() {
    it('Login with Valid Credentials', function() {

        const loginpage = new loginPage()
        loginpage.visit()
        loginpage.enterEmail('xirajmunir@gmail.com')
        loginpage.enterPassword('siraj1234')
        loginpage.clickSubmit()
        cy.title().should('be.equal', 'My account - My Store')
    })
})