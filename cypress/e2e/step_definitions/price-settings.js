const {Given, When, Then, And} = require("@badeball/cypress-cucumber-preprocessor");
const mainPage = require("../../support/pages/main-page");
const selectorsPage = require("../../support/pages/selectors-page");
const elasticSIPPage = require("../../support/pages/elastic-sip-page");
const voiceAPIPage = require("../../support/pages/voice-api-page");
const messagesPage = require("../../support/pages/messages-page");
const faxPage = require("../../support/pages/fax-page");
const wirelessPage = require("../../support/pages/wireless-page");
const idDataPage = require("../../support/pages/id-data-page");
const whatsAppPage = require("../../support/pages/whatsApp-page");
const formPage = require("../../support/pages/template-form-page");
const pricingPage = require("../../support/pages/pricing-page");
const networkingPage = require("../../support/pages/networking-page");

before(() => {
    mainPage.navigate();
    mainPage.acceptCookie();
})

Given("Main page is opened", () => {
    mainPage.navigate();
})

And("I hover mouse on {string} tab", () => {
    mainPage.Header.hoverOnPricingTab();
})

When("I click on {string} link", (link) => {
    cy.log("Link is : " + link);
    switch(link){
        case 'Elastic SIP Trunking':
            mainPage.Header.hoverOnPricingTab().clickOnElasticSIPLink();
            break;
        case 'Voice API':
            mainPage.Header.hoverOnPricingTab().clickOnVoiceAPILink();
            break;
        case 'SMS API':
            mainPage.Header.hoverOnPricingTab().clickOnSMSAPILink();
            break;
        case 'Wireless':
            mainPage.Header.hoverOnPricingTab().clickOnWirelessLink();
            break;
        case 'Fax':
            mainPage.Header.hoverOnPricingTab().clickOnFaxLink();
            break;
        case 'WhatsApp Business API':
            mainPage.Header.hoverOnPricingTab().clickOnWhatsAppLink();
            break;
        case 'Identity Services & Data':
            mainPage.Header.hoverOnPricingTab().clickOnIdAndDataLink();
            break;
        case 'See all pricing':
            mainPage.Header.hoverOnPricingTab().clickOnSeeAllPricingLink();
            break;
        case 'Networking':
            pricingPage.clickOnNetworkingLink();
            break;
        default:
            break;
    }
})

When("I choose {string} in country selector", (country) => {
    selectorsPage.selectCountry(country);
})

When("I choose {string} in currency selector", (currency) => {
    selectorsPage.selectCurrency(currency);
})

When("I scroll into Download form", () => {
    formPage.scrollToForm();
})

And("Fill the form", () => {
    formPage.fillForm();
})

Then("Url contains {string}", (urlPart) => {
    cy.url().should('contain', urlPart);
})

And("Page header contains {string}", (word) => {
    selectorsPage.pageHeader.should('contain', word);
})

Then ("Message about incorrect email address should be visible", () => {
    formPage.allert.should('be.visible');
})

Then("In {} table(,) {string} row(, \"Message fee\" column) contains only {string}", (row, currency) => {
    switch(row){
        case 'Local calls':
            elasticSIPPage.firstColumnText.should('contain', currency);
            elasticSIPPage.secondColumnText.should('contain', currency);
            break;
        case 'Local Calls':
            voiceAPIPage.originationPrice.should('contain', currency);
            voiceAPIPage.terminationPrice.should('contain', currency);
            break;
        case 'Send and receive Fax via API':
            faxPage.priceText.should('contain', currency);
            break;
        case 'Multi-size SIM card':
            wirelessPage.priceText.should('contain', currency);
            break;
        case 'Inbound CNAM ':
            idDataPage.priceText.should('contain', currency);
            break;
        case 'Local numbers':
            messagesPage.sendPrice.should('contain', currency);
            messagesPage.receivePrice.should('contain', currency);
            break;
        case '50 Mbps':
            networkingPage.awsPrice.should('contain', currency);
            networkingPage.msoftPrice.should('contain', currency);
            networkingPage.googleCloudPrice.should('contain', currency);
            break;
        case 'Business-initiated':
            whatsAppPage.priceText.should('contain', currency);
            break;
        default:
            break;
    }
})

And("In all price lines the currency symbol {string} is displayed", (currency) => {
    pricingPage.elasticSIPPriceOrig.should('contain', currency);
    pricingPage.elasticSIPPriceTerm.should('contain', currency);
    pricingPage.voiceAPIPrice.should('contain', currency);
    pricingPage.smsAPIPrice.should('contain', currency);
    pricingPage.faxPrice.should('contain', currency);
    pricingPage.wirelessPrice.should('contain', currency);
    pricingPage.whatsAppPrice.should('contain', currency);
    pricingPage.verifyAPIPrice.should('contain', currency);
    pricingPage.idDataPrice.should('contain', currency);
    pricingPage.networkingPrice.should('contain', currency);
})