//dropdown phai nam trong tag select, thi moi la dropdown nay
const DROPDOWNSEL = "select[id='dropdown']";

describe('Dropdown handling', ()=>{
    it('should be able to select dropdown options', ()=>{
        cy.visit('/dropdown')
        //by index == stt cua option
        cy.get(DROPDOWNSEL).select(1);
        //by value == value=?
        cy.get(DROPDOWNSEL).select("2");
        //by visible text = text display UI
        cy.get(DROPDOWNSEL).select("Option 1");

        //verify
        cy.get("select option:selected").invoke("text").should("eq","Option 1")
    })
})