import { Component } from '@angular/core';

@Component({
  selector: 'app-budgetlist',

  templateUrl: './budgetlist.component.html',
  styleUrl: './budgetlist.component.css'
})
export class BudgetlistComponent {
  budgets: string[] = ['Food Expenses', 'Fare Expenses', 'Daily Expenses'];
  newBudget: string = '';

  addBudget() {
    if (this.newBudget.trim()) {
      this.budgets.push(this.newBudget);
      this.newBudget = '';
    }
  }
}
