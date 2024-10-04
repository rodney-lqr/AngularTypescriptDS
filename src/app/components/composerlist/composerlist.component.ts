import { Component } from '@angular/core';

@Component({
  selector: 'app-composerlist',

  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent {
  composers: string[] = ['Beethoven', 'Wolfgang', 'Kween Yasmin'];
  newComposer: string = '';

  addComposer() {
    if (this.newComposer.trim()) {
      this.composers.push(this.newComposer);
      this.newComposer = '';
    }
  }
}
