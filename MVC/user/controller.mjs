import {UserModel} from "./model.mjs"

// export const a = 10;
// export function main() {}
// export const arrow = () => {};
// export const obj = {};

export class UserController extends UserModel {
    constructor(name, age, city) {
        super(name, age, city)
    }

    showInfo() {
        console.log("I am usr", this)
    }

    
    
}