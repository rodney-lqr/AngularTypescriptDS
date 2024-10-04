import { Component } from '@angular/core';

@Component({
  selector: 'app-destinationlist',

  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  destinations: string[] = ['Paris', 'Tokyo', 'London'];
  newDestination: string = '';

  addDestination() {
    if (this.newDestination.trim()) {
      this.destinations.push(this.newDestination);
      this.newDestination = '';
    }
  }
}
