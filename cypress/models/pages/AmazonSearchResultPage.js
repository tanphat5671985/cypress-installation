const SEARCH_RS_ITEM_SEL = 'div[cel_widget_id^="MAIN-SEARCH_RESULTS"]';

class AmazonSearchResultPage {

    get seachItemElemList(){
        return cy.get(SEARCH_RS_ITEM_SEL);
    }
}

module.exports=AmazonSearchResultPage