import {$$} from "protractor";

export class VeterinariansPage {
    allVeterinarians=$$(".table-striped tr> td:nth-child(1)");


    getMyVeterinarianName(firstName: string,lastName: string){
        return this.allVeterinarians.getText().then(nameOwner => {
            return nameOwner.includes(firstName+ " "+lastName);
        })
    }

}