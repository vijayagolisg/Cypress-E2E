export class cartPage{
    weblocators={
        username:'#username',
        password:'#password',
        submit:'.btn',
        //msg:'div.post-header',
        //successmsg:'div.post-content div.has-text-align-center strong')
    }


    openURL(){
        cy.visit(Cypress.env('URL1'))
    }
    enterUsername(uname){
        cy.get(this.weblocators.username).type(uname)
    }
    enterPassword(pwd){
        cy.get(this.weblocators.password).type(pwd)
    }
    clickOnSubmit(){
        cy.get(this.weblocators.submit).click()
    }

}