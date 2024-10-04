import { Component } from '@angular/core';

@Component({
  selector: 'app-stationerylist',

  templateUrl: './stationerylist.component.html',
  styleUrl: './stationerylist.component.css'
})
export class StationerylistComponent {
  stationeryItems: string[] = ['Ballpen', 'Notebook', 'Scissors'];
  newStationeryItem: string = '';

  addStationeryItems() {
    if (this.newStationeryItem.trim()) {
      this.stationeryItems.push(this.newStationeryItem);
      this.newStationeryItem = '';
    }
  }
}
