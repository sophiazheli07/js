import { UserController } from "./controller.mjs";

export class UserView extends UserController {
  constructor(name, age, city) {
    super(name, age, city);
  }

  render(index) {
    const main = document.getElementById("main");

    main.innerHTML += `
        <div>
            <p>${this.name}, ${this.age}</p>
            <span>${this.city}</span>
            <button id="show-bnt-${index}">Show info</button>
        </div>
        `;

    const showBtn = document.querySelector(`#show-bnt-${index}`);
    showBtn.onclick = this.showInfo;
  }

  reRender() {}
}
