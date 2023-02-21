// new
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        return this;
    }
    showInfo () {
        console.log(`Hi, my name is ${this.name} I am ${this.age}`)
    }
    getName () {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}

// old
function PersonFn (name, age) {
    this.name = name;
    this.age = age;
    this.showInfo = function() {
        console.log(`Hi, my name is ${this.name} I am ${this.age}`)
    }
    return this;
}

const person1 = new Person("Igor", 23);
console.log(person1.setName("Yana"))
console.log(person1)
person1.showInfo();
console.log(person1.getName())


// const person2 = new PersonFn("Oleg", 50);
// person2.showInfo()

class Car {
    constructor (name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
        return this;
    }
    showInfo () {
        console.log(`This is ${this.name} it is ${this.black} and it costs ${this.price}`)
    }
}

const car1 = new Car("Dodge", 15000, "black");
car1.showInfo();


class Ford {

    static isFord (car) {
        return car instanceof Ford;
    }

    static keys (car) {
        const result = [];
        for (let key in car) {
            result[result.length] = key;
            
        }
        return result;
    }

    constructor (price, color, model, speed) {
        this.price = price;
        this.color = color;
        this.model = model;
        this.speed = speed;

        return this;
    }
    info () {
        console.table(this)
    }
    ride () {
        console.log(`I am riding with speed ${this.speed}`)
    }
}
const mondeo = new Ford(10000, "black", "mondelo", 200);
mondeo.info()
mondeo.ride()







class Mustang extends Ford {
    constructor (price, color, model, speed, turbo) {
        super(price, color, model, speed);

        this.turbo = turbo;

        return this;
    }

    speedyRide () {
        console.log(`I am riding with speed ${this.speed}`)
    }
}


const mustang = new Mustang(50000, "blue", "Mustang", 300, true);
console.log(mondeo instanceof Ford);
mustang.info();
mustang.speedyRide();







class MustangGT extends Mustang {
    constructor (price, color, model, speed, turbo, isGT) {
        super(price, color, model, speed, turbo)

        this.isGT = isGT;

        return this;
    };

    nitro () {
        this.speed = this.speed + 50;
        console.log(`I am using nitro with speed ${this.speed}`)
    }
    info () {
        console.log(this)
    }
};

const mustangGT = new MustangGT(70000, "red", "MustangGT", 400, true, true);

console.table(mustangGT)
mustangGT.speedyRide();
mustangGT.nitro();
mustangGT.ride();
mustangGT.info();

// console.log(Ford.isFord());
// Array.isArray([]);

console.log(Ford.keys(mustangGT))


class Friend {
    constructor (name, age) {
        this.name = name;
        this.age = age;

        return this;
    }
    setName(newName) {
        this.name = newName;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}

const friend1 = new Friend("Igor", 23)
friend1.setName("Yana");
friend1.setAge("25");
console.log(friend1);


class Friend2 {
    constructor (name, age) {
        [...arguments] = this.arguments
        return arguments;
    }

}


function myFn (obj, ...arguments) {
    this.name = name;
    this.age = age;
    this.showInfo = function() {
        console.log(`Hi, my name is ${this.name} I am ${this.age}`)
    }
    return this;
}