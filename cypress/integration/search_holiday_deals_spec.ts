import {HomePo} from "../support/home.po";


describe('View Holiday deals list', () => {
    const homePage = new HomePo();

    beforeEach(() => cy.visit(homePage.pageUrl));

    it('Product filtering by category check', () => {
    homePage.clickOnElem(homePage.happyHolidayShopBtn);
    })
});