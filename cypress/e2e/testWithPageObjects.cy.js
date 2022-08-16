
import { onDatepickerPage } from "../support/page_objects/datePickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPages"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

// To ignore and run On browsers functions
const runOn = (browser, fn) => {
     if(Cypress.isBrowser(browser)){
          fn()
     }
} 

const ignoreOn = (browser, fn) => {
     if (!Cypress.isBrowser(browser)){
          fn()
     }
}

describe("Test with Page Objects",()=>{  // test suite declaration
    
     beforeEach('open applictaion', ()=>{   // beforeeach hook for every test begin this run 
         cy.openHomePage() // called from commands.js
     })

// to ignore this test on firefore browser
ignoreOn('firefox', () => {
// runOn('firefox', () => {
     it("Verifying navigations across the pages", ()=>{  //test declaration
          //Page objects calling from NavigationPages predefined functions/methods 
             navigateTo.formsLayoutsPage()  
             navigateTo.datePickerPage()
             navigateTo.toasterPage()
             navigateTo.tooltipPPage()
             navigateTo.smartTablePage()
       
       
          })

})  
    
     

     it("Should submit the Inline form and Basic Form and select tomorrow date in the calender", () =>{
          navigateTo.formsLayoutsPage()
          onFormLayoutsPage.submitInlineFormWithNameAndEmail('Anas007', 'aa@gmail.com') 
          onFormLayoutsPage.submitBasicFormWithEmailAndPassword('aa@gmail.com', 'password')
          navigateTo.datePickerPage()
          onDatepickerPage.selectCommonDatepickerDateFromToday(1)
          onDatepickerPage.selectDatepickerWithRangeFromToday(26,30)
          navigateTo.smartTablePage( )
          onSmartTablePage.addNewRecordWithFirstAndLastName('Anas', 'Ansari')
          onSmartTablePage.updateAgeByFirstName('Anas', '26')
          onSmartTablePage.deleteRowByIndex(1)


     })



})