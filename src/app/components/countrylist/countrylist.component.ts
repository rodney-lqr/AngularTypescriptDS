import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',

  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {
  countries: string[] = ['United States (North America)', 'Brazil (South America)', 'South Korea (Asia)'];
  newCountry: string = '';

  addCountry() {
    if (this.newCountry.trim()) {
      this.countries.push(this.newCountry);
      this.newCountry = '';
    }
  }
}
