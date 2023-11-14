describe('Multiple elems matching interaction',()=>{
    it('should be able to ineract with list of element', function(){
        cy.visit("/login")

        //Cach 1: use eq
        cy.get("input").eq(0).type("tomsmith")
        cy.get("input").eq(1).type("SuperSecretPassword!")
        //cy.get("button[type='submit']").click()

        //Cach 2: use closure
        cy.get("input").then(items =>{
            cy.get(items[0]).clear()
            cy.get(items[0]).type("tomsmith")

            cy.get(items[1]).clear()
            cy.get(items[1]).type("SuperSecretPassword!")

        })
        //Cach 3:use .each
        cy.get("input").each((ite, index)=>{
            cy.get(ite).type("something...")
        })

        cy.get("button[type='submit']").click()
        
        cy.wait(2000)
    });
});