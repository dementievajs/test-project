// <reference types="Cypress" />

import {BaseComponent} from "./base.component";

export class GiftCardPo extends BaseComponent {
    pageUrl = '/dp';

    giftAmmount100 = '#a-autoid-23';
    previewPrice = '#gc-buy-box-text .a-color-price';
    shareViaEmail= '#gc-delivery-mechanism-button-Email-announce';
    typeToEmail = '#gc-order-form-recipients';
    senderName = '#gc-order-form-senderName';
    addToCardButton = '#gc-buy-box-atc';
    addedToCard = '.a-size-medium h1';

}