import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-first-project';

  obj = { city: "Kyiv", lat: 1922982923, lon: 29339393939 }
  numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  users = [{ name: "Igor", age: 23 }, { name: "Oleg", age: 23 }, { name: "Nastya", age: 23 }, { age: "100" }];

  counter: number = 0;

  iterate() {
    this.users.forEach((user) => {
      user.name?.slice()
    })
  }

  // mutable !!!
  increment() {
    this.counter = this.counter + 1;
  }

  decrement() {
    this.counter = this.counter - 1;
  }
}

