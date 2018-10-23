"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddNewVeterinariansPage {
    constructor() {
        this.firstNameField = protractor_1.$("#firstName");
        this.lastNameField = protractor_1.$("#lastName");
        this.typeField = protractor_1.$("#specialties");
        this.saveVetButton = protractor_1.$("[type=submit]");
        this.variabila = protractor_1.$("[value='0: Object']");
    }
    addInformation(firstName, lastName) {
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastName);
    }
    checkVar() {
        this.typeField.click();
        this.variabila.click();
    }
    clickOnAddVeterinariansButton() {
        this.saveVetButton.click();
    }
}
exports.AddNewVeterinariansPage = AddNewVeterinariansPage;
