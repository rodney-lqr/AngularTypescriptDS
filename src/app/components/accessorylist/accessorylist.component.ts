import { Component } from '@angular/core';

@Component({
  selector: 'app-accessorylist',

  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent {
  accessories: string[] = ['Phone Case', 'Screen Protector', 'Laptop Bag'];
  newAccessories: string = '';

  addAccessories() {
    if (this.newAccessories.trim()) {
      this.accessories.push(this.newAccessories);
      this.newAccessories = '';
    }
  }
}
