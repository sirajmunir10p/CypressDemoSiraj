/// <reference types = "Cypress" />

import loginPage from '../PageObjects/loginPage'
import homePage from '../PageObjects/homePage'
import * as staticData from "../../fixtures/example.json";

describe('Test Suite', function() {

    const loginpage = new loginPage()
    const homepage = new homePage()

    it('Login with Valid Credentials', function() {
        loginpage.visit()
        loginpage.enterEmail(staticData.email)
        loginpage.enterPassword(staticData.pwd)
        loginpage.clickSubmit()
        cy.title().should('be.equal', 'My account - My Store')
    })

    it('Search an Item to purchase', function() {
        homepage.searchItem('Faded Short Sleeve T-shirts')
        homepage.clickSearch()
        homepage.ProductHeading.should('have.text', 'Faded Short Sleeve T-shirts')
        homepage.ProductHeading.invoke('text').should('contain', 'Faded ') //Another way to assert
        homepage.ProductHeading.invoke('text').should('include', 'Faded Short Sleeve T-shirts') //Another way to assert
    })
})