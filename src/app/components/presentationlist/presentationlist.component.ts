import { Component } from '@angular/core';

@Component({
  selector: 'app-presentationlist',

  templateUrl: './presentationlist.component.html',
  styleUrl: './presentationlist.component.css'
})
export class PresentationlistComponent {
  presentations: string[] = ['Artificial Intelligence', 'Climate Change', 'Contemporary World'];
  newPresentations: string = '';

  addPresentations() {
    if (this.newPresentations.trim()) {
      this.presentations.push(this.newPresentations);
      this.newPresentations = '';
    }
  }
}
