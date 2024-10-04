import { Component } from '@angular/core';

@Component({
  selector: 'app-furniturelist',

  templateUrl: './furniturelist.component.html',
  styleUrl: './furniturelist.component.css'
})
export class FurniturelistComponent {

  furnitures: string[] = ['Sofa', 'Dining Table', 'Bed'];
  newFurniture: string = '';

  addFurniture() {
    if (this.newFurniture.trim()) {
      this.furnitures.push(this.newFurniture);
      this.newFurniture = '';
    }
  }
}
