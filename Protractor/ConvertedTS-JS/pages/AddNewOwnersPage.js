"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//de stiut element(by.css(""))<=>$(" ");intr-un selector css ".nav navbar-nav;id="#..",daca vrem un el de tip ul :"ul"
const protractor_1 = require("protractor");
class AddNewOwnersPage {
    constructor() {
        //elements
        this.firstNameField = protractor_1.$("#firstName");
        this.lastNameField = protractor_1.$("#lastName");
        this.addressField = protractor_1.$("#address");
        this.cityField = protractor_1.$("#city");
        this.telephoneField = protractor_1.$("#telephone");
        this.errorMessage = protractor_1.$(".help-block");
        this.addOwnerButton = protractor_1.$("[type=submit]");
    }
    //methods
    addInformation(firstName, lastName, address, city, telephone) {
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastName);
        this.addressField.sendKeys(address);
        this.cityField.sendKeys(city);
        this.telephoneField.sendKeys(telephone);
    }
    addInformationForModel(owner) {
        this.firstNameField.sendKeys(owner.firstName);
        this.lastNameField.sendKeys(owner.lastName);
        this.addressField.sendKeys(owner.address);
        this.cityField.sendKeys(owner.city);
        this.telephoneField.sendKeys(owner.telephone);
    }
    addTelephone(telephone) {
        this.telephoneField.clear();
        this.telephoneField.sendKeys(telephone);
    }
    isErrordysplayed() {
        var EC = protractor_1.browser.ExpectedConditions;
        return EC.presenceOf(this.errorMessage);
    }
    getErrorMessage() {
        return this.errorMessage.getText().then(message => {
            return message;
        });
    }
    clickOnAddOwnerButton() {
        this.addOwnerButton.click();
    }
}
exports.AddNewOwnersPage = AddNewOwnersPage;
