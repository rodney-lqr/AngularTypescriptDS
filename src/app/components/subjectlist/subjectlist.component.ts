import { Component } from '@angular/core';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subjects: string[] = ['Ethics', 'Science', 'Mathematics'];
  newSubjects: string = '';

  addSubjects() {
    if (this.newSubjects.trim()) {
      this.subjects.push(this.newSubjects);
      this.newSubjects = '';
    }
  }

}
