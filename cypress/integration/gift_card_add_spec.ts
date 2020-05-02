//<reference types="Cypress" />

import {GiftCardsPo} from "../support/giftCards.po";
import {HomePo} from "../support/home.po";
import {GiftCardPo} from "../support/giftCard.po";

describe ('Choosing gift card and adding it to card', () => {
    const homePage = new HomePo();
    const giftCardsPage = new GiftCardsPo();
    const giftCardPage = new GiftCardPo();


    beforeEach( () => cy.visit(homePage.pageUrl));

        it('Selecting Gift Card and adding it to the card', () => {
           const price = '100';
           const addedToCardText = 'Added to Cart';
           const email = 'dementievsp@gmail.com';
           const senderName = 'Julia';

           homePage.clickOnElem(homePage.giftCardBtn);
           cy.url().should('include', giftCardsPage.pageUrl);
           giftCardsPage.isElemVisible(giftCardsPage.imgGiftLink);
           giftCardsPage.clickOnElem(giftCardsPage.imgGiftLink, 0);
           giftCardPage.clickOnElem(giftCardPage.giftAmmount100);
           giftCardPage.isElemContainText(giftCardPage.previewPrice, price);
           giftCardPage.clickOnElem(giftCardPage.shareViaEmail);
           giftCardPage.typeIntoElement(giftCardPage.typeToEmail, `${email} {enter}`);
           giftCardPage.typeIntoElement(giftCardPage.senderName, `${senderName} {enter}`);
           giftCardPage.clickOnElem(giftCardPage.addToCardButton);
           giftCardPage.isElemContainText(giftCardPage.addedToCard, addedToCardText);
        })
});