"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class VeterinariansPage {
    constructor() {
        this.allVeterinarians = protractor_1.$$(".table-striped tr> td:nth-child(1)");
    }
    getMyVeterinarianName(firstName, lastName) {
        return this.allVeterinarians.getText().then(nameOwner => {
            return nameOwner.includes(firstName + " " + lastName);
        });
    }
}
exports.VeterinariansPage = VeterinariansPage;
