const {BasePage}= require("./base-page");

const sendPrice = "//div[text()='Local numbers']/following-sibling::div[1]//div[contains(text(),'0')][1]";
const receivePrice = "//div[text()='Local numbers']/following-sibling::div[1]//div[contains(text(),'0')][2]";

class MessagesPage extends BasePage {
    get sendPrice() {
        return this.getElementText(sendPrice);
    }

    get receivePrice() {
        return this.getElementText(receivePrice);
    }
}

module.exports = new MessagesPage();