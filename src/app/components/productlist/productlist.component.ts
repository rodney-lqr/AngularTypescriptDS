import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  products: string[] = ['Laptop', 'Smartphone', 'Headphone'];
  newProducts: string = '';

  addProducts() {
    if (this.newProducts.trim()) {
      this.products.push(this.newProducts);
      this.newProducts = '';
    }
  }

}
