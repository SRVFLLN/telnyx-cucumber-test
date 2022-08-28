const {BasePage} = require("./base-page");

const Header = require("./header");
const Footer = require("./footer");

const acceptCookieButtom = "button[aria-label^='close'] ~ div button";

class MainPage extends BasePage {
    navigate() {
        super.navigate();
    }

    acceptCookie() {
        this.clickOn(acceptCookieButtom);
    }

    get Header() {
        return Header.instance;
    }

    get Footer() {
        return Footer.instance;
    }
}

module.exports = new MainPage();