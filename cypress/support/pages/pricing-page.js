const { BasePage } = require("./base-page");

const elasticSIPPriceOrig = "//a[contains(@href,'elastic-sip')]/preceding-sibling::div//strong[1]";
const elasticSIPPriceTerm = "//a[contains(@href,'elastic-sip')]/preceding-sibling::div//strong[2]";
const voiceAPIPrice = "//a[contains(@href,'call')]/preceding-sibling::div//strong";
const smsAPIPrice = "//a[contains(@href,'messaging')]/preceding-sibling::div//strong";
const faxPrice = "//a[contains(@href,'fax')]/preceding-sibling::div//strong";
const wirelessPrice = "//a[contains(@href,'wireless')]/preceding-sibling::div//strong";
const whatsAppPrice = "//a[contains(@href,'whats')]/preceding-sibling::div//strong";
const verifyAPIPrice = "//a[contains(@href,'verify')]/preceding-sibling::div//strong";
const idDataPrice = "//a[contains(@href,'id')]/preceding-sibling::div//strong";
const networkingPrice = "//a[contains(@href,'net')]/preceding-sibling::div//strong";
const networkingLink = "main a[href*='net']";

class PricingPage extends BasePage {
    get elasticSIPPriceOrig() {
        return this.getElementText(elasticSIPPriceOrig);
    }

    get elasticSIPPriceTerm() {
        return this.getElementText(elasticSIPPriceTerm);
    }

    get voiceAPIPrice() {
        return this.getElementText(voiceAPIPrice);
    }

    get smsAPIPrice() {
        return this.getElementText(smsAPIPrice);
    }

    get faxPrice() {
        return this.getElementText(faxPrice);
    }

    get wirelessPrice() {
        return this.getElementText(wirelessPrice);
    }

    get whatsAppPrice() {
        return this.getElementText(whatsAppPrice);
    }

    get verifyAPIPrice() {
        return this.getElementText(verifyAPIPrice);
    }

    get idDataPrice() {
        return this.getElementText(idDataPrice);
    }

    get networkingPrice() {
        return this.getElementText(networkingPrice);
    }

    clickOnNetworkingLink() {
        this.clickOn(networkingLink);
    }
}

module.exports = new PricingPage();