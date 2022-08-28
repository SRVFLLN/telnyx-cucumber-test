const {BasePage}= require("./base-page");

const priceText = "//span[text()='Business-initiated']/parent::div/following-sibling::div[1]//div[text()='Message fee']/parent::div";

class WhatsAppPage extends BasePage {
    get priceText() {
        return this.getElementText(priceText);
    }
}

module.exports = new WhatsAppPage();