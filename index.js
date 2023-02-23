class Person {
    #age = Date.now();
    constructor(name) {
        this.name = name;

    }
    getDate (date) {
        return date - this.#age;
    }
    // getName () {
    //     return this.name
    // }
    // setName (name) {
    //     this.name = name
    // }

    // get name () {
    //     return this.name;
    // }
    // set name (newName) {
    //     return this.name = newName;
    // }
    get age () {
        return this.#age;
    }
    set age (newAge) {
        this.#age = newAge + 1;
    }
};


const person = new Person("Igor", 23);

person.age = 100

person.name = "Oleg"
// person.setAge(200)


console.log(person)






// console.log(person.getName());
// person .name = "Oleg";
// console.log(person.getName());

class Cars {
    #color
    constructor(model, price) {
        this.model = model;
        this.price = price;

    }
    get color () {
        return this.#color
    }
    set color (newColor) {
        return this.#color = newColor
    }
};

// Cars.prototype.getDisc = function () {
//     console.table(this)
//     return this.#color;
// }

const cars = new Cars("Dodge", 15000)
cars.color = "Red"
console.log(cars)


// console.log(Person.prototype)

// Person.prototype.showInfo = function () {
//     console.table(this)
// }
// person.showInfo()

Array.prototype.showInfo = function () {
    console.table(this)
}
const arr = [1,2,3,4,5];
arr.showInfo()

class SuperArray extends Array {
    constructor (arr) {
        super(arr);
    }
    showInfo () {
        console.table(this)
    }
    push (el) {
        this[this.length] = el;
        return this.flat();
    }
}
const myArray = new SuperArray(["Hello", "worls"]);

console.log(myArray.push("Hey"), "res");

myArray.showInfo();

class SuperObject extends Object {
    constructor (arr) {
        super(arr);

        for(let key in arr) {
            this[key] = arr[key]
        }
    }
    copyInfo () {
        return{...this}
    }
}
SuperObject.prototype.copy = function () {
    return null;
}

const obj10 = new SuperObject ({name: "Olek"})
const anotherObj = obj10.copyInfo();
console.log(anotherObj, obj10)

Array.prototype.forEach = function () {
    console.log(this, "!!!!")
}