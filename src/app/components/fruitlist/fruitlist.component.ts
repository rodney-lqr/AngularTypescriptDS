import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',

  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruits: string[] = ['Apple', 'Mango', 'Orange'];
  fruitNames: string = '';

  addFruit() {
    if (this.fruitNames.trim()) {
      this.fruits.push(this.fruitNames);
      this.fruitNames = '';
    }
  }

}
