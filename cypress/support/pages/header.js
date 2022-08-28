const { BasePage } = require("./base-page");

const pricingTab = "//header//span/span[contains(text(),'Pricing')]";
const elasticSIPLink = "header a[href$='sip']";
const voiceAPILink = "header a[href*='call-control']";
const smsAPILink = "header a[href*='mess']";
const faxLink = "header a[href*='fax']";
const wirelessLink = "header a[href*='wireless']";
const whatsAppLink = "header a[href*='whats']";
const idNDataLink = "header a[href*='id-serv']";
const companyTab = "//header//span[contains(text(),'Company')]";
const aboutLink = "header a[href$='company']";
const careersLink = "header a[href$='careers']";
const seeAllPricesLink = "header a[href='/pricing']";

class Header extends BasePage{
    static form = null;

    static get instance() {
        if(!Header.form) {
            Header.form = new Header();
        }
        return Header.form;
    }

    hoverOnPricingTab() {
        this.hoverOn(pricingTab, true);
        return {
            clickOnElasticSIPLink() {
                Header.prototype.clickOn(elasticSIPLink);
            },
            clickOnVoiceAPILink() {
                Header.prototype.clickOn(voiceAPILink);
            },
            clickOnSMSAPILink() {
                Header.prototype.clickOn(smsAPILink);
            },
            clickOnFaxLink() {
                Header.prototype.clickOn(faxLink);
            },
            clickOnWirelessLink() {
                Header.prototype.clickOn(wirelessLink);
            },
            clickOnWhatsAppLink() {
                Header.prototype.clickOn(whatsAppLink);
            },
            clickOnIdAndDataLink() {
                Header.prototype.clickOn(idNDataLink);
            },
            clickOnSeeAllPricingLink() {
                Header.prototype.clickOn(seeAllPricesLink);
            }
        }
    }

    hoverOnCompanyTab() {
        this.hoverOn(companyTab, true);
        return {
            clickOnAboutTelnyxLink() {
                Header.prototype.clickOn(aboutLink);
            }, 
            clickOnCareersLink() {
                Header.prototype.clickOn(careersLink);
            }
        }
    }
}

module.exports = Header;