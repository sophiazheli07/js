class Entity {
  constructor(e) {
    this.e = e;
  }

  method1() {
    this.e = `1`;
    console.log(`Method1`, this.e);
    return this;
  }
  method2() {
    this.e = `2`;
    console.log(`Method2`, this.e);
    return this;
  }
  method3() {
    this.e = `3`;
    console.log(`Method3`, this.e);
    return this;
  }
}

const e = new Entity("e");
const res = e.method1().method2().method3();
console.log(res);

class SuperArray extends Array {
  constructor(...args) {
    super(...args);
    this.args = args;
  }
  reduce(callback) {
    const result = new Array(this.args).reduce(callback);

    return {
      result,
      this: arr,
    };
  }
}
const superArray = new SuperArray(1, 2, 3);
// superArray.map().reduce().this.forEach();

class CustomElement {
  constructor(tag, parent = document.body) {
    this.tag = tag;
    this.element = document.createElement(tag);
    this.element.style.transition = "0.3s";
    parent.appendChild(this.element);
  }
  changeColor(color, delay = 0) {
    if (!delay) {
      this.element.style.background = color;
      return this;
    }
    setTimeout(() => {
      this.element.style.background = color;
    }, delay);

    return this;
  }
  changeText(text) {
    this.element.textContent = text;
    return this;
  }
  changeSize(w, h) {
    this.element.style.width = w;
    this.element.style.height = h;
    return this;
  }
  changeTagName(newTag) {
    //   писав тато, не gpt, як ви казали хаххах

    // const newElement = document.createElement(newTag);

    // Array.from(this.element.attributes).forEach((attr) =>
    //   newElement.setAttribute(attr.name, attr.value)
    // );
    // Array.from(this.element.childNodes).forEach((child) =>
    //   newElement.appendChild(child.cloneNode(true))
    // );

    // this.element.parentNode.replaceChild(newElement, this.element);

    // this.element = newElement;

    // return this;

    this.parent.removeChild(this.element);
    this.element.style = document.createElement(newTag);
    this.parent.appendChild(this.element);

    this.element.style.width = this.sizes.w;
    this.element.style.height = this.sizes.h;
    this.element.textContent = this.text;
    this.element.style.background = this.color;
    return this;
  }
}

const customElement = new CustomElement("div");

const result2 = customElement
  .changeColor("red")
  .changeColor("green", 2000)
  .changeText("Hello World")
  .changeSize("200px", "200px")
  .changeTagName("button")

console.log(result2);

const customElement2 = new CustomElement("table")


