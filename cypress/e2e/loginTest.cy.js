describe("Login to Web App", ()=>{

    it.only("Test Super Admin with valid Credentials", ()=>{
        cy.visit('./')
        cy.get('[name="username"]').type("AnasSAdmin")
        cy.get('[name="password"]').type("Info@123")
        cy.get('[class="btn btn-primary"]').click()
        cy.wait(2000)
        //Assertions of expected page url and title
        cy.url().should("include", "/dashboard")
        cy.url().should("eq", "http://192.168.36.65:9292/dashboard")
        cy.title().should("eq", "OLMT - AP")

    })


    it("Test Admin with valid Credentials", ()=>{
        cy.visit('./')
        cy.get('[name="username"]').type("AnasAdmin")
        cy.get('[name="password"]').type("Info@123")
        cy.get('[class="btn btn-primary"]').click()
        cy.wait(2000)
        cy.url().should("include", "/dashboard")
        cy.url().should("eq", "http://192.168.36.65:9292/dashboard")
        cy.title().should("eq", "OLMT - AP")
    })

    it("Test Client with valid Credentials", ()=>{
        cy.visit('./')
        cy.get('[name="username"]').type("AnasClient")
        cy.get('[name="password"]').type("Info@123")
        cy.get('[class="btn btn-primary"]').click()
        cy.wait(2000)
        cy.url().should("include", "/dashboard")
        cy.url().should("eq", "http://192.168.36.65:9292/dashboard")
        cy.title().should("eq", "OLMT - AP")
    })

    it("Test Employee Checker with valid Credentials", ()=>{
        cy.visit('./')
        cy.get('[name="username"]').type("AnasChecker")
        cy.get('[name="password"]').type("Info@123")
        cy.get('[class="btn btn-primary"]').click()
        cy.wait(2000)
        cy.url().should("include", "/dashboard")
        cy.url().should("eq", "http://192.168.36.65:9292/dashboard")
        cy.title().should("eq", "OLMT - AP")
    })

    it("Test Employee Maker with valid Credentials", ()=>{
        cy.visit('./')
        cy.get('[name="username"]').type("AnasMaker")
        cy.get('[name="password"]').type("Info@123")
        cy.get('[class="btn btn-primary"]').click()
        cy.wait(2000)
        cy.url().should("include", "/dashboard")
        cy.url().should("eq", "http://192.168.36.65:9292/dashboard")
        cy.title().should("eq", "OLMT - AP")
    })
})