import { Component } from '@angular/core';

@Component({
  selector: 'app-eventlist',

  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  events: string[] = ['Music Festival', 'Tech Conference', 'Comic Con'];
  newEvent: string = '';

  addEvent() {
    if (this.newEvent.trim()) {
      this.events.push(this.newEvent);
      this.newEvent = '';
    }
  }
}
