import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplaylists',

  templateUrl: './musicplaylists.component.html',
  styleUrl: './musicplaylists.component.css'
})
export class MusicplaylistsComponent {
  musics: string[] = ['Shape of You', 'Bohemian Rhapsody', 'Melancholy Hill'];
  newMusic: string = '';

  addMusic() {
    if (this.newMusic.trim()) {
      this.musics.push(this.newMusic);
      this.newMusic = '';
    }
  }
}
