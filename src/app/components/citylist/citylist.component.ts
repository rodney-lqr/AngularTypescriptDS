import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cities: string[] = ['New York', 'London', 'Manila'];
  newCity: string = '';

  addCity() {
    if (this.newCity.trim()) {
      this.cities.push(this.newCity);
      this.newCity = '';
    }
  }

}
