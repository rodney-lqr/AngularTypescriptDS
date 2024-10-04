import { Component } from '@angular/core';

@Component({
  selector: 'app-sportslist',

  templateUrl: './sportslist.component.html',
  styleUrl: './sportslist.component.css'
})
export class SportslistComponent {
  sports: string[] = ['Soccer', 'Basketball', 'Voleyball'];
  newSport: string = '';

  addSport() {
    if (this.newSport.trim()) {
      this.sports.push(this.newSport);
      this.newSport = '';
    }
  }
}
