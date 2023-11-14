const CHECKBOXES_SEL= "[type='checkbox']";
describe('Handling checkboxes', ()=>{
    it('should be able to select/unselect a checkbox', ()=>{
        cy.visit("/checkboxes");
        //unselect checkbox 2
        cy.get(CHECKBOXES_SEL).eq(1).click();
        //verify all checkboxes are unselected
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").should("have.length", 2);
        cy.wait(5000)
        //select all again
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").then(item=>{
            cy.get(item).click({multiple:true})
        })


    });
});