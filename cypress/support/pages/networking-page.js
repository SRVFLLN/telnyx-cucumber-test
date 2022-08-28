const {BasePage}= require("./base-page");

const awsPrice = "//div[text()='50 Mbps']/following-sibling::div[1]";
const msoftPrice = "//div[text()='50 Mbps']/following-sibling::div[2]";
const googleCloudPrice = "//div[text()='50 Mbps']/following-sibling::div[3]";

class NetworkingPage extends BasePage {
    get awsPrice() {
        return this.getElementText(awsPrice);
    }

    get msoftPrice() {
        return this.getElementText(msoftPrice);
    }

    get googleCloudPrice() {
        return this.getElementText(googleCloudPrice);
    }
}

module.exports = new NetworkingPage();