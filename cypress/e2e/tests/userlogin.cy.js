import { cartPage } from "../../pages/cartPage";
const cartPageObj=new cartPage()
import fixtureData from '../../fixtures/fixtureData.json'


describe('test Automaion',()=>{

    
    it('login checking',()=>{
        cartPageObj.openURL()
        cartPageObj.enterUsername(fixtureData.username)
        cartPageObj.enterPassword(fixtureData.password)
        cartPageObj.clickOnSubmit()
        cy.contains("Logged In Successfully").should('be.visible')
        cy.contains('Congratulations student. You successfully logged in!').should('be.visible')
    //after(()=>{
       //cy.captureConsoleLogs(); //})

    })
})
