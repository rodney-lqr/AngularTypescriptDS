import { Component } from '@angular/core';


@Component({
  selector: 'app-laptoplist',

  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptops: string[] = ['Dell XPS 13', 'MacBook Pro', 'Infinix Inbook x4'];
  newLaptop: string = '';

  addLaptop() {
    if (this.newLaptop.trim()) {
      this.laptops.push(this.newLaptop);
      this.newLaptop = '';
    }
  }
}
