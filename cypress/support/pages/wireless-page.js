const {BasePage}= require("./base-page");

const priceText = "//div[text()='Multi-size SIM card']/following-sibling::div[1]";

class WirelessPage extends BasePage {
    get priceText() {
        return this.getElementText(priceText);
    }
}

module.exports = new WirelessPage();