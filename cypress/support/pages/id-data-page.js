const {BasePage}= require("./base-page");

const priceText = "//span[text()='Inbound CNAM ']/parent::div/following-sibling::div[1]";

class IdDataPage extends BasePage {
    get priceText() {
        return this.getElementText(priceText);
    }
}

module.exports = new IdDataPage();