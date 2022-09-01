describe("visual test", ()=>{

    // it("should test snapshot", () => {
    //     cy.visit("/")
    //     cy.contains("Forms").click()
    //     cy.contains("Form Layouts").click()

    //     cy.contains("nb-card", "Using the Grid").then( firstForm =>{
    //          cy.wrap(firstForm).toMatchImageSnapshot()   // just to match & snapshot the targeted form i.e. "Using the Grid"
    //          cy.document().toMatchImageSnapshot()        // Match all document/whole page & snapshot
                     
    
    //     })
    
    // })

    it.only("should test percy", () => {
        cy.visit("/")
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()

        cy.contains("nb-card", "Using the Grid").then( firstForm =>{
             cy.wait(1000)   // just add for page to load properly
             cy.percySnapshot('FormLayouts')
    
        })
    
    })
})