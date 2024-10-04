import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',

  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videos: string[] = ['The Social Dillema', 'The Planet', 'Vsauce'];
  newVideo: string = '';

  addVideo() {
    if (this.newVideo.trim()) {
      this.videos.push(this.newVideo);
      this.newVideo = '';
    }
  }
}
