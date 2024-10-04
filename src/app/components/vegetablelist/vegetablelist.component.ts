import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetablelist',

  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css'
})
export class VegetablelistComponent {
  vegetables: string[] = ['Carrot', 'Broccoli', 'Cauliflower'];
  newVegetables: string = '';

  addVegetable() {
    if (this.newVegetables.trim()) {
      this.vegetables.push(this.newVegetables);
      this.newVegetables = '';
    }
  }
}
