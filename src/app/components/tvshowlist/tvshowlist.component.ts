import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshowlist',

  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent {
  shows: string[] = ['Breaking Bad', 'Prison Break', 'The Sopranos'];
  newTvShow: string = '';

  addTvShow() {
    if (this.newTvShow.trim()) {
      this.shows.push(this.newTvShow);
      this.newTvShow = '';
    }
  }
}
