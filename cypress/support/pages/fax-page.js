const {BasePage}= require("./base-page");

const priceText = "//div[text()='Send and receive Fax via API']/following-sibling::div[1]";

class FaxPage extends BasePage {
    get priceText() {
        return this.getElementText(priceText);
    }
}

module.exports = new FaxPage();