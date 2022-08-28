/// <reference types="Cypress" />
require("cypress-xpath");
require("cypress-real-events/support");

exports.BasePage = class BasePage {
    navigate() {
        cy.visit("");
    }

    unfocus(){
        cy.get('html').realMouseMove(0,0);
    }

    clickOn(elLocator) {
        this.getElement(elLocator).click();
        this.unfocus();
    }

    clickOnByCoord(elLocator, x, y) {
        this.getElement(elLocator).click(x, y);
    }

    hoverOn(elLocator) {
        this.getElement(elLocator).parent().realHover();
        this.getElement(elLocator).realHover();
    }

    typeInto(elLocator, textToType) {
        this.getElement(elLocator).type(textToType);
    }

    check(elLocator, value = null) {
        if(value){
            this.getElement(elLocator).check(value);
            return;
        }
        this.getElement(elLocator).check();
    }

    checkWithOption(elLocator, option) {
        this.getElement(elLocator).check(option);
    }

    /**
     * Returns DOM element
     * 
     * @param {string} elLocator Locator of element in XPath or CSS format.
     * @param {boolean} xpath Is locator in XPath format. (Default = false)
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} DOM element.
     */
    getElement(elLocator) {
        if(elLocator.startsWith('//')) {
            return cy.xpath(elLocator)
        }
        return cy.get(elLocator);
    }

    getElementText(elLocator) {
        return this.getElement(elLocator).invoke('text');
    }

    getElementAttribute(elLocator, attributeName) {
        return this.getElement(elLocator).invoke('attr', attributeName);
    }

    scrollTo(elLocator){
        this.getElement(elLocator).scrollIntoView();
    }
}