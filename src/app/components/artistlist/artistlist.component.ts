import { Component } from '@angular/core';

@Component({
  selector: 'app-artistlist',

  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
  artists: string[] = ['Vincent Van Gogh', 'Pablo Picasso', 'Bob Ross'];
  newArtist: string = '';

  addArtist() {
    if (this.newArtist.trim()) {
      this.artists.push(this.newArtist);
      this.newArtist = '';
    }
  }
}
