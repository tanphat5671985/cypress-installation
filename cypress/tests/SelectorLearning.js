describe('Element interaction', ()=>{
    it('should be able to complete the form',()=>{
        //open login page
        cy.visit("/login")
        //username
        cy.get("#username").type("tomsmith")
        //password
        cy.get("[name='password']").type("SuperSecretPassword!")
        //btn
        cy.get("button[type='submit']").click()
        //debug
        cy.wait(3000)
    });
});