import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',

  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {

  buildings: string[] = ['Library', 'Gymnasium', 'Clinic'];
  newBuilding: string = '';

  addBuilding() {
    if (this.newBuilding.trim()) {
      this.buildings.push(this.newBuilding);
      this.newBuilding = '';
    }
  }
}
