describe('Learn about within and find methods', ()=>{
    it('within method', ()=>{
        cy.visit('https://www.simplyrecipes.com/');
        //tim toan bo element
        /*
        cy.get('.card__title').each(($cardTitle, index)=>{
            cy.log(index);
        })
        */
        //tim 1 element co trong 1 from co trung element cha
         
        cy.get('.showcase__hero').within(()=>{
            cy.get('.card__title')
        })
    });

    it.only('find method', ()=>{
        cy.visit('https://www.simplyrecipes.com/');
        cy.get('.showcase__hero').find('.card__title').each(($cardTitle, index)=>{
            cy.log(index);
        })
    });
});