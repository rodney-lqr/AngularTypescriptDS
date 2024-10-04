import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspecificationlist',

  templateUrl: './laptopspecificationlist.component.html',
  styleUrl: './laptopspecificationlist.component.css'
})
export class LaptopspecificationlistComponent {
  laptopSpecs: string[] = ['16GB RAM, Intel i7 Processor', '512GB SSD, AMD Ryzen 5'];
  newLaptopSpecs: string = '';

  addLaptopSpec() {
    if (this.newLaptopSpecs.trim()) {
      this.laptopSpecs.push(this.newLaptopSpecs);
      this.newLaptopSpecs = '';
    }
  }
}
