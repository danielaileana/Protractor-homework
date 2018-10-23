import {Utils} from "../Utilities/Utils";
import {MenuPages} from "../pages/MenuPages";
import {browser} from "protractor";
import {AddNewOwnersPage} from "../pages/AddNewOwnersPage";
import {OwnersData} from "../testData/ownersData";
import {AddNewVeterinariansPage} from "../pages/AddNewVeterinariansPage";
import {OwnersPage} from "../pages/OwnersPage";
import {VeterinariansPage} from "../pages/VeterinariansPage";
let menuPage = new MenuPages();
let ownersPage= new AddNewOwnersPage();
let veterinarianPage=new AddNewVeterinariansPage();
let ownerPage= new OwnersPage();
let allveterinariansPage=new VeterinariansPage();

// @ts-ignore
describe("Owners", () => {

    beforeEach(()=>{
        Utils.goToHomePage();
    });
    it("Add a new owner--happy path",() => {
        // browser.get(browser.baseUrl);
        menuPage.clickOwnersButton();

        menuPage.clickAddNewOwnerButton();

        // ownersPage.addInformation("Gigel","fiuf","bld","bffh","12341");
       // ownersPage.addInformation(OwnersData.GigelHappyPath.firstName,OwnersData.GigelHappyPath.lastName,OwnersData.GigelHappyPath.address,OwnersData.GigelHappyPath.city,OwnersData.GigelHappyPath.telephone);
       ownersPage.addInformationForModel(OwnersData.GigelHappyPath);//echivalent cu cea de mai sus
        ownersPage.clickOnAddOwnerButton();
        browser.sleep(2000);


    });
    it("Add a new owner--check phone validation",() => {
        // browser.get(browser.baseUrl);
        menuPage.clickOwnersButton();

        menuPage.clickAddNewOwnerButton();

        //ownersPage.addInformation("Gigel","fiuf","bld","bffh","12341");
        // ownersPage.addTelephone("fbreh");
        ownersPage.addInformation(OwnersData.GigelHappyPath.firstName,OwnersData.GigelHappyPath.lastName,OwnersData.GigelHappyPath.address,OwnersData.GigelHappyPath.city,OwnersData.GigelHappyPath.telephone);
        ownersPage.addTelephone("fgffjef");
        expect(ownersPage.isErrordysplayed()).toBeTruthy();//se asteapta sa returneze true
        // expect(ownersPage.isErrordysplayed()).toBeFalsy();//se asteapta sa returneze false
         expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");

        browser.sleep(5000);


    });


    it("check if my owner exits in list->yes",() =>{
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnersButton();
       // ownerPage.getMyOwnerName(OwnersData.GigelHappyPath.firstName,OwnersData.GigelHappyPath.lastName);
        expect(ownerPage.getMyOwnerName(OwnersData.GigelHappyPath.firstName,OwnersData.GigelHappyPath.lastName);)
    });

    it("Add a new veterinarian--happy path",() => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAddNewVeterinariansButton();
        veterinarianPage.addInformation("Daniela","Ileana");
        veterinarianPage.checkVar();
        veterinarianPage.clickOnAddVeterinariansButton();
        browser.sleep(2000);

    });

    it("check if my veterinarian exists in list->yes", () =>{
        menuPage.clickVeterinariansButton();
        menuPage.clickAllVeterinariansButton();

        expect(allveterinariansPage.getMyVeterinarianName("Daniela","Ileana"));

    });

});