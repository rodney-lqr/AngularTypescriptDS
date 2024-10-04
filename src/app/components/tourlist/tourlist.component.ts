import { Component } from '@angular/core';

@Component({
  selector: 'app-tourlist',

  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent {
  tourLocations: string[] = ['Tokyo, Japan', 'Perth, Australia', 'Tondo, Manila'];
  newTourLocation: string = '';

  addTourLocation() {
    if (this.newTourLocation.trim()) {
      this.tourLocations.push(this.newTourLocation);
      this.newTourLocation = '';
    }
  }
}
