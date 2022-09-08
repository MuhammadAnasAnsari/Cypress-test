describe("User module testing on Web App", ()=>{

    beforeEach("Logged in and on home page landing", ()=>{
        cy.visit('./')
        cy.get('[name="username"]').type("AnasSAdmin")
        cy.get('[name="password"]').type("Info@123")
        cy.get('[class="btn btn-primary"]').click()
    })

    it("Add new user into Web App", ()=>{
        // cy.conatins("User").click()


    })

})