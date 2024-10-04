import { Component } from '@angular/core';

@Component({
  selector: 'app-inventorylist',

  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent {
  inventoryItems: string[] = ['Laptop', 'Printer', 'Mouse'];
  newInventoryItems: string = '';

  addInventoryItem() {
    if (this.newInventoryItems.trim()) {
      this.inventoryItems.push(this.newInventoryItems);
      this.newInventoryItems = '';
    }
  }
}
