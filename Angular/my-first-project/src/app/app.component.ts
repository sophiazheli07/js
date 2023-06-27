import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-first-project';
  // a: number = 10;
  // isTrue: boolean = false;
  // user2: undefined = undefined;
  // user3: null = null;

obj = {city: "Kyiv", lat: 4513451345, lon: 33452345345134}
  numbers = [1,2,3,4,5,6,7,8,9,10, "Igor"];
  users = [{ name: "Igor", age: 23 }, { name: "Oleg", age: 23 }, { name: "Nastya", age: 23 }];

  counter: number = 0;

  // mutable
  increment() {
    this.counter = this.counter + 1
  }
  decrement() {
    this.counter = this.counter - 1
  }


}
