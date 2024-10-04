import { Component } from '@angular/core';

@Component({
  selector: 'app-mealplanlist',

  templateUrl: './mealplanlist.component.html',
  styleUrl: './mealplanlist.component.css'
})
export class MealplanlistComponent {
  mealplans: string[] = ['Grilled Chicken with Vegetables', 'Caesar Salad', 'Canny Salad'];
  newMealplan: string = '';

  addMealplan() {
    if (this.newMealplan.trim()) {
      this.mealplans.push(this.newMealplan);
      this.newMealplan = '';
    }
  }
}
