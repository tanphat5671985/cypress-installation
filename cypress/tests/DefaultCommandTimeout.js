describe('Exploring default command timeout', ()=>{
    it('should be able to apply custom default timeout',()=>{
        cy.visit('https://the-internet.herokuapp.com')
        cy.get("a[href='/login1']").click()
        cy.location('pathname',{timeout:500}).should("eq","/login")
    });
});