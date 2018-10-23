"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utilities/Utils");
const MenuPages_1 = require("../pages/MenuPages");
const protractor_1 = require("protractor");
const AddNewOwnersPage_1 = require("../pages/AddNewOwnersPage");
const ownersData_1 = require("../testData/ownersData");
const AddNewVeterinariansPage_1 = require("../pages/AddNewVeterinariansPage");
const OwnersPage_1 = require("../pages/OwnersPage");
const VeterinariansPage_1 = require("../pages/VeterinariansPage");
let menuPage = new MenuPages_1.MenuPages();
let ownersPage = new AddNewOwnersPage_1.AddNewOwnersPage();
let veterinarianPage = new AddNewVeterinariansPage_1.AddNewVeterinariansPage();
let ownerPage = new OwnersPage_1.OwnersPage();
let allveterinariansPage = new VeterinariansPage_1.VeterinariansPage();
// @ts-ignore
describe("Owners", () => {
    beforeEach(() => {
        Utils_1.Utils.goToHomePage();
    });
    it("Add a new owner--happy path", () => {
        // browser.get(browser.baseUrl);
        menuPage.clickOwnersButton();
        menuPage.clickAddNewOwnerButton();
        // ownersPage.addInformation("Gigel","fiuf","bld","bffh","12341");
        // ownersPage.addInformation(OwnersData.GigelHappyPath.firstName,OwnersData.GigelHappyPath.lastName,OwnersData.GigelHappyPath.address,OwnersData.GigelHappyPath.city,OwnersData.GigelHappyPath.telephone);
        ownersPage.addInformationForModel(ownersData_1.OwnersData.GigelHappyPath); //echivalent cu cea de mai sus
        ownersPage.clickOnAddOwnerButton();
        protractor_1.browser.sleep(2000);
    });
    it("Add a new owner--check phone validation", () => {
        // browser.get(browser.baseUrl);
        menuPage.clickOwnersButton();
        menuPage.clickAddNewOwnerButton();
        //ownersPage.addInformation("Gigel","fiuf","bld","bffh","12341");
        // ownersPage.addTelephone("fbreh");
        ownersPage.addInformation(ownersData_1.OwnersData.GigelHappyPath.firstName, ownersData_1.OwnersData.GigelHappyPath.lastName, ownersData_1.OwnersData.GigelHappyPath.address, ownersData_1.OwnersData.GigelHappyPath.city, ownersData_1.OwnersData.GigelHappyPath.telephone);
        ownersPage.addTelephone("fgffjef");
        expect(ownersPage.isErrordysplayed()).toBeTruthy(); //se asteapta sa returneze true
        // expect(ownersPage.isErrordysplayed()).toBeFalsy();//se asteapta sa returneze false
        expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");
        protractor_1.browser.sleep(5000);
    });
    it("check if my owner exits in list->yes", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnersButton();
        // ownerPage.getMyOwnerName(OwnersData.GigelHappyPath.firstName,OwnersData.GigelHappyPath.lastName);
        expect(ownerPage.getMyOwnerName(ownersData_1.OwnersData.GigelHappyPath.firstName, ownersData_1.OwnersData.GigelHappyPath.lastName));
    });
});
it("Add a new veterinarian--happy path", () => {
    menuPage.clickVeterinariansButton();
    menuPage.clickAddNewVeterinariansButton();
    veterinarianPage.addInformation("Daniela", "Ileana");
    veterinarianPage.checkVar();
    veterinarianPage.clickOnAddVeterinariansButton();
    protractor_1.browser.sleep(2000);
});
it("check if my veterinarian exists in list->yes", () => {
    menuPage.clickVeterinariansButton();
    menuPage.clickAllVeterinariansButton();
    expect(allveterinariansPage.getMyVeterinarianName("Daniela", "Ileana"));
});
;
