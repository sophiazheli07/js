// const person = {
//     name1: "Alex",
//     age: 10,
//     email: "email@gmail.com",
// };

// const person1 = {
//     name1: "Alex",
// }

// person.name1
// person.age
// person.email

// const {name1, age, email} = person;
// console.log(name1, age, email, person);

// Object.freeze(person);

// delete person.age;

// person.city = "Kyiv";
// console.log(person);

// console.log(Object.isFrozen(person1));

// const data = {
//     name1: "Alex",
//     age: 15,
//     city: "Kyiv",
// };

// const data1 = {
//     name1: "Alex",
//     age: 15,
//     city: "Kyiv",
// };

// Object.freeze(data);

// data.email = "email@gmail.com"

// console.log(data)

// data1.email = "email@gmail.com"

// console.log(data1)



const object = {
    person1: {
        name: "Igor",
        age: 20
    },
    person2: {
        name: "Oleg",
        age: 50
    },
    person3: {
        name: "Alex",
        age: 40
    },
}

for (let key in object) {
    if(object[key].age < 50) {
        Object.freeze(object[key])
    }
    else delete object[key]
    // if(object.age < 50){
    //     Object.freeze(object)
    // }
    // else delete object.age
}
console.log(object)


// Object
// Boolean
// String
// Number
console.log(window);

const database = {};

const data = {
    game1: {
        isFinished: true,
        score: 100
    },
    game2: {
        isFinished: false,
        score: 500
    },
    game3: {
        isFinished: false,
        score: 10
    },
    game4: {
        isFinished: true,
        score: 10
    },
    game5: {
        isFinished: true,
        score: 200
    },
}

// for(let key in data) {
//     if(data[key].score >= 100 && data[key].isFinished === true) {
//         database.key = data.key
//     } else delete data[key]
// }
// console.log(database)

for(let key in data) {
    if (data[key].isFinished && data[key].score >= 100) {
        database[key] = data[key];
    }
}
console.log(database)

// const obj = {
//     name: "Igor",
//     age: 40,
// }

// // obj.newField = "1"

// Object.defineProperty(obj, "newField", {
//     value: "1",
//     writable: true,
//     enumerable: false
// });
// obj.newFiels = "2"
// //для совбесов треба розібрати

// console.log(obj)

const obj = {
    name: "Igor",
};
const obj2 = {
    age: 15,
};
const obj3 = {
    age: 100,
    city: "Kyiv",
};

const obj1 = {
    name: obj.name,
    age: obj2.age,
    city: obj3.city
};

console.log(obj1)