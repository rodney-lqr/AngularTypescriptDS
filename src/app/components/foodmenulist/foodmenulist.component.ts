import { Component } from '@angular/core';

@Component({
  selector: 'app-foodmenulist',

  templateUrl: './foodmenulist.component.html',
  styleUrl: './foodmenulist.component.css'
})
export class FoodmenulistComponent {
  menu: string[] = ['Menudo', 'Caldereta', 'Pochero'];
  newMenu: string = '';

  addMenu() {
    if (this.newMenu.trim()) {
      this.menu.push(this.newMenu);
      this.newMenu = '';
    }
  }
}
