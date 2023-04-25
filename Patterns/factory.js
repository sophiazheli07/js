// class A {
//   constructor(a) {
//     this.a = a;
//   }
// }
// class B {
//   constructor(b) {
//     this.b = b;
//   }
// }
// class C {
//   constructor(c) {
//     this.b = b;
//   }
// }
// class NotDefinedEntity {
//   constructor() {}
// }

// class Factory {
//   constructor(type, data) {
//     // Basic cases
//     // if (type === "A") {
//     //     return new A(data);
//     // }
//     // if (type === "B") {
//     //     return new B(data);
//     // }
//     // if (type === "C") {
//     //     return new C(data);
//     // }

//     if (data.a) {
//       return new A(data.a);
//     }
//     if (data.b) {
//       return new B(data.b);
//     }
//     if (data.c) {
//       return new B(data.c);
//     }

//     return new NotDefinedEntity();
//   }
// }

// const a = new Factory("A", { a: "a" });
// const b = new Factory("B", { b: "b" });
// const c = new Factory("C", { b: "c" });
// const undefinedEntity = new Factory("D", { d: "d" });
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(undefinedEntity);
// console.log(undefinedEntity instanceof NotDefinedEntity);

class Square {
  constructor(data) {
    const { size, color } = data;
    this.color = color;
    this.size = size;

    this.element = document.createElement("div");
    this.element.style.background = color;
    this.element.style.width = this.element.style.height = size + "px";

    return document.body.appendChild(this.element);
  }
}
class Circle {
  constructor({ color, size, border }) {
    this.color = color;
    this.size = size;

    this.element = document.createElement("div");
    this.element.style.backgroundColor = color;
    this.element.style.width = this.element.style.height = size + "px";
    this.element.style.borderRadius = "50%";
    this.element.style.border = border;

    document.body.appendChild(this.element);
  }
}

class SuperCircle extends Circle {
  constructor(data) {
    super(data);
    this.element.style.backgroundImage = `url("${data.img}")`;
  }
}

// class Factory {
//   constructor(data) {
//     if (data.border) {
//       return data.img ? new SuperCircle() : new Circle(data);
//     } else {
//       return new Square(data);
//     }
//   }
// }]

class Factory {
  static cases = {
    Circle,
    SuperCircle,
    Square,
  };
  constructor(data) {
    return new Factory.cases[
      (data.img && SuperCircle.name) ||
        (data.border && Circle.name) ||
        Square.name
    ](data);
  }
}

new Factory({ color: "black", size: 100 });
new Factory({ color: "aqua", size: 75 });
new Factory({ color: "red", size: 150, border: "1px solid black" });
new Factory({ color: "lime", size: 200, border: "1px solid black" });
new Factory({
  color: "pink",
  size: 200,
  border: "1px solid black",
  img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1423600%2Fpexels-photo-1423600.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-johannes-plenio-1423600.jpg%26fm%3Djpg&tbnid=5DHbzhBlNT8bpM&vet=12ahUKEwjIzfuSsqf-AhVKtCoKHSHfCYoQMygCegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fforest%2F&docid=BC4_f5opwORgnM&w=6000&h=4000&itg=1&q=forest&ved=2ahUKEwjIzfuSsqf-AhVKtCoKHSHfCYoQMygCegUIARDjAQ",
});

class A {
  constructor({ text }) {
    this.text = text;
  }
}
class B {
  constructor({ text }) {
    this.text = text;
  }
}
class C {
  constructor({ text }) {
    this.text = text;
  }
}

class Factory2 {
  static cases = {
    A,
    B,
    C,
  };
  static chechA = (text) => {
    const arrayOfText = text.split("");
    return arrayOfText.every((el) => el === el.toUppercase());
  };
  static chechB = (text) => text.length <= 5;

  static chechC = (text) => typeof text === "number";

  constructor(data) {
    return new Factory2.cases[
      (Factory2.chechA(text) && A.name) ||
        (Factory2.chechB(text) && B.name) ||
        (Factory2.chechC(text) && C.name) ||
        C.name
    ](data);
  }

  //   constructor(data) {
  //     return new Factory2.cases[
  //       (data.text === text.toUppercase() && A.name) ||
  //         (data.text.length <= 5 && B.name) ||
  //         (typeof data.C === "number" && C.name) ||
  //         C.name
  //     ](data);
  //   }
}

// HW

class Factory3 {
  static cases = {
    A,
    B,
  };
  static check = {
    A: (data) => (data.a ? true : false),
    B: (data) => Object.values(data).every((el) => typeof el === "string"),
  };
  constructor(data) {
    return new Factory3.cases[
      (Factory3.check.A(data) && A.name) || (Factory3.check.B(data) && B.name)
    ](data);
  }
}
const a1 = new Factory3({a: 10});
const b1 = new Factory3({b: "1010101", msg: "jsdwe"});

console.log(a1, b1, "RESSS")