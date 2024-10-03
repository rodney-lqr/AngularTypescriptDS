import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModels: string[] = ['Toyota Corolla', 'Honda Civic', 'Ford Raptor'];
  newCarModels: string = '';

  addCarModels() {
    if (this.newCarModels.trim()) {
      this.carModels.push(this.newCarModels);
      this.newCarModels = '';
    }
  }

}
