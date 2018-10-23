import {$$} from "protractor";

export class MenuPages {
    //elent.all(by.css())<=>$$("")
    menuItems = $$(".nav.navbar-nav li a");
    //pe baza asta o sa creez fiecare buton
    homeButton=this.menuItems.get(0);//home
    ownersButton=this.menuItems.get(1);
    veterinariansButton=this.menuItems.get(4);
    petTypesButton=this.menuItems.get(7);
    specialtiesButton=this.menuItems.get(8);

    addNewOwnerButton=this.menuItems.get(3);
    addNewVeterinariansButton=this.menuItems.get(6);
    allOwnersButton=this.menuItems.get(2);
    allVeterinriansButton=this.menuItems.get(5);
    //methods

    clickOwnersButton(): void{
        this.ownersButton.click();
    }
    clickAddNewOwnerButton(): void{
        this.addNewOwnerButton.click();
    }

    clickVeterinariansButton():void{
        this.veterinariansButton.click();
    }

    clickAddNewVeterinariansButton():void{
        this.addNewVeterinariansButton.click();
    }

    clickAllOwnersButton():void{
        this.allOwnersButton.click();
    }

    clickAllVeterinariansButton():void{
        this.allVeterinriansButton.click();
    }


}