import { Component } from '@angular/core';

@Component({
  selector: 'app-grocerylist',

  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent {
  groceries: string[] = ['Eggs', 'Milk', 'Vegetables'];
  newGroceryItem: string = '';

  addGrocery() {
    if (this.newGroceryItem.trim()) {
      this.groceries.push(this.newGroceryItem);
      this.newGroceryItem = '';
    }
  }
}
