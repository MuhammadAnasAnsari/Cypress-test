describe("Login to Web App", ()=>{


    it.only("Test with valid Credentials", ()=>{
        cy.visit('./')
        cy.get('[name="username"]').type("AnasSAdmin")
        cy.get('[name="password"]').type("Info@123")
        cy.get('[class="btn btn-primary"]').click()
        // cy.get(".icon-dashboard").should("have", ".icon-dashboard")
    })
})