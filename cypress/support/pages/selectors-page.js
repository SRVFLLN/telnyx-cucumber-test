const {BasePage}= require("./base-page");

const countrySelector = "button span svg";
const countryListElement = (countryName) => { return `//ul//a[text()='${countryName}']` };
const currencySelector = "main p+div div:last-child button[style]";
const currencyListElement = (currencyCode) => { return `//ul//div[text()='${currencyCode}']`};
const pageHeader = "h1 span";
const payHeader = "//span[contains(text(),'Local')]/ancestor::div/preceding-sibling::h2";

class SelectorPage extends BasePage {
    selectCountry(countryName) {
        this.clickOn(countrySelector);
        this.clickOn(countryListElement(countryName));
    }

    selectCurrency(currencyCode) {
        this.clickOn(currencySelector);
        this.clickOn(currencyListElement(currencyCode));
    }

    get pageHeader() {
        return this.getElementText(pageHeader);
    }

    get paySectionHeader() {
        return this.getElementText(payHeader);
    }
}

module.exports = new SelectorPage();