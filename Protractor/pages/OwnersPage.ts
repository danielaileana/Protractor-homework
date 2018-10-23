import {$, $$, browser, element} from "protractor";
import {OwnerModel} from "../Models/OwnerModel";

export class OwnersPage{
    allowners = $$(".ownerFullName");

    getMyOwnerName(firstName: string,lastName: string){
        return this.allowners.getText().then(nameOwner => {
            return nameOwner.includes(firstName+ " "+lastName);
        })
    }


}