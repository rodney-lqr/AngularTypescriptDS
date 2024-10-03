import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {

  names: string[] = ['Rodney Idanan', 'Kim So Hyun'];
  newName: string = '';

  addName() {
    if (this.newName.trim()) {
      this.names.push(this.newName);
      this.newName = '';
    }
  }
}
