const {BasePage}= require("./base-page");

const terminationPrice = "//span[text()='Local Calls']/parent::div/following-sibling::div[1]";
const originationPrice = "//span[text()='Local Calls']/parent::div/following-sibling::div[2]";

class VoiceAPIPage extends BasePage {
    get terminationPrice() {
        return this.getElementText(terminationPrice);
    }

    get originationPrice() {
        return this.getElementText(originationPrice);
    }
}

module.exports = new VoiceAPIPage();