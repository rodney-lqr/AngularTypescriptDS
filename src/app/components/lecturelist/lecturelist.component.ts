import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',

  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectures: string[] = ['Data Stuctures', 'Python Introduction', 'Angular Components'];
  newLectures: string = '';

  addLecture() {
    if (this.newLectures.trim()) {
      this.lectures.push(this.newLectures);
      this.newLectures = '';
    }
  }
}
