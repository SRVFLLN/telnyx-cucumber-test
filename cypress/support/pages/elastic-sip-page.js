const {BasePage}= require("./base-page");

const terminationPrice = "//div[text()='Local calls']/following-sibling::div[1]";
const originationPrice = "//div[text()='Local calls']/following-sibling::div[2]";

class ElasticSIPPage extends BasePage{
    get terminationPrice() {
        return this.getElementText(terminationPrice);
    }

    get originationPrice() {
        this.getElementText(originationPrice);
    }
}

module.exports = new ElasticSIPPage();