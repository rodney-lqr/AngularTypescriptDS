import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',

  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
  courses: string[] = ['Bachelor of Science in Nursing', 'Bachelor of Science in Information Technology', 'Bachelor of Science in Criminology'];
  newCourses: string = '';

  addCourses() {
    if (this.newCourses.trim()) {
      this.courses.push(this.newCourses);
      this.newCourses = '';
    }
  }

}
