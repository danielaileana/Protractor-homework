"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class OwnersPage {
    constructor() {
        this.allowners = protractor_1.$$(".ownerFullName");
    }
    getMyOwnerName(firstName, lastName) {
        return this.allowners.getText().then(nameOwner => {
            return nameOwner.includes(firstName + " " + lastName);
        });
    }
}
exports.OwnersPage = OwnersPage;
