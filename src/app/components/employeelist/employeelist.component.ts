import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',

  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  names: string[] = ['Travis Scott', 'Manny Trillanes', 'Fiona Bratchelor'];
  newEmployee: string = '';

  addName() {
    if (this.newEmployee.trim()) {
      this.names.push(this.newEmployee);
      this.newEmployee = '';
    }
  }
}
