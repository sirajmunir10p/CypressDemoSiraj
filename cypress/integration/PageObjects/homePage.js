class homePage {

    searchItem(value)
    {
        const search = cy.get('[id=search_query_top]')
        search.clear()
        search.type(value)
        return this
    }

    clickSearch()
    {
        const searchBtn = cy.get('[name=submit_search]')
        searchBtn.click() 
        cy.visit("http://automationpractice.com/index.php?id_product=1&controller=product&search_query=Faded+Short+Sleeve+T-shirts&results=1")
    }

    get ProductHeading()
    {
        return cy.get("h1:nth-child(1)")
    }
}

export default homePage