import {$, browser} from "protractor";

export class AddNewVeterinariansPage {

    firstNameField=$("#firstName");
    lastNameField=$("#lastName");
    typeField=$("#specialties");
    saveVetButton=$("[type=submit]");


    addInformation(firstName: string,lastName: string){
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastName);

    }
    variabila=$("[value='0: Object']");
    checkVar (){
        this.typeField.click();
        this.variabila.click();

    }

    clickOnAddVeterinariansButton(): void{
        this.saveVetButton.click();
    }


}