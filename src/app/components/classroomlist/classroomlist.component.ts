import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',

  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  classroomStudent: string[] = ['Rodney Idanan', 'Fiercieval Toribio', 'James Kent Taay'];
  newClassroomStudent: string = '';

  addClassroomStudent() {
    if (this.newClassroomStudent.trim()) {
      this.classroomStudent.push(this.newClassroomStudent);
      this.newClassroomStudent = '';
    }
  }
}
