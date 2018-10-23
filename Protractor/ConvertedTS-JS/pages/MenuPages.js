"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class MenuPages {
    constructor() {
        //elent.all(by.css())<=>$$("")
        this.menuItems = protractor_1.$$(".nav.navbar-nav li a");
        //pe baza asta o sa creez fiecare buton
        this.homeButton = this.menuItems.get(0); //home
        this.ownersButton = this.menuItems.get(1);
        this.veterinariansButton = this.menuItems.get(4);
        this.petTypesButton = this.menuItems.get(7);
        this.specialtiesButton = this.menuItems.get(8);
        this.addNewOwnerButton = this.menuItems.get(3);
        this.addNewVeterinariansButton = this.menuItems.get(6);
        this.allOwnersButton = this.menuItems.get(2);
        this.allVeterinriansButton = this.menuItems.get(5);
    }
    //methods
    clickOwnersButton() {
        this.ownersButton.click();
    }
    clickAddNewOwnerButton() {
        this.addNewOwnerButton.click();
    }
    clickVeterinariansButton() {
        this.veterinariansButton.click();
    }
    clickAddNewVeterinariansButton() {
        this.addNewVeterinariansButton.click();
    }
    clickAllOwnersButton() {
        this.allOwnersButton.click();
    }
    clickAllVeterinariansButton() {
        this.allVeterinriansButton.click();
    }
}
exports.MenuPages = MenuPages;
