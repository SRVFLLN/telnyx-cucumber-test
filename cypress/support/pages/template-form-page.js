const { BasePage } = require("./base-page");
const credentials = require("../../fixtures/form-credentials.json");
const buttonUnderForm = "//*[contains(@mask,'Contact-Center_svg__a')]/ancestor::div[following-sibling::p]/following-sibling::div/a"

class TemplateFormPage extends BasePage {
    elements = {
        firstNameInput: "input[name*='First']",
        lastNameInput: "input[name*='Last']",
        emailInput: "input[type='email']",
        downloadButton: "button[type='submit']",
        allertText: "div[role='alert']>span"
    }

    scrollToForm() {
        this.scrollTo(buttonUnderForm);
    }

    fillForm() {
        this.typeInto(this.elements.firstNameInput, credentials.firstName);
        this.typeInto(this.elements.lastNameInput, credentials.lastName);
        this.typeInto(this.elements.emailInput, credentials.email);
        this.clickOn(this.elements.downloadButton);
    }

    get allert() {
        return this.getElement(this.elements.allertText);
    }
}

module.exports = new TemplateFormPage();