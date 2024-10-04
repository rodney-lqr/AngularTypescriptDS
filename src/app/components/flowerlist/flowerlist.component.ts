import { Component } from '@angular/core';

@Component({
  selector: 'app-flowerlist',

  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowers: string[] = ['Rose', 'Tulip', 'Sunflower'];
  newFlower: string = '';

  addFlower() {
    if (this.newFlower.trim()) {
      this.flowers.push(this.newFlower);
      this.newFlower = '';
    }
  }
}
