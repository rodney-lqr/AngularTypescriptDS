import { Component } from '@angular/core';

@Component({
  selector: 'app-paintinglist',

  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent {
  paintings: string[] = ['Starry Night', 'Mona Lisa', 'The Scream'];
  newPainting: string = '';

  addPainting() {
    if (this.newPainting.trim()) {
      this.paintings.push(this.newPainting);
      this.newPainting = '';
    }
  }
}
