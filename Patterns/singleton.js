class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    SingleTon.users.push(this);
  }
}

class SingleTon {
  static users = [];

  constructor(name, age, city) {
    const findingUser = SingleTon.users.find(
      (user) => user.name === name && user.age === age && user.city === city
    );
    if (findingUser) {
      return findingUser;
    } else {
      return new User(name, age, city);
    }
  }
}

const user = new SingleTon("Igor", 23, "Kyiv");
console.log(user, SingleTon.users);

// return SingleTon.users[name] || new User(name);
