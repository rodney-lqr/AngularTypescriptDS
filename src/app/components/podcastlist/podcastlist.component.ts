import { Component } from '@angular/core';

@Component({
  selector: 'app-podcastlist',

  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  podcasts: string[] = ['The Daily', 'How I Built This', 'Payaman Talks'];
  newPodcast: string = '';

  addPodcast() {
    if (this.newPodcast.trim()) {
      this.podcasts.push(this.newPodcast);
      this.newPodcast = '';
    }
  }
}
