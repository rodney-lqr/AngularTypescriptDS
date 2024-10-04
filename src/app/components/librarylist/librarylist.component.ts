import { Component } from '@angular/core';

@Component({
  selector: 'app-librarylist',

  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent {
  libraries: string[] = ['jQuery', 'Lodash', 'NumPy'];
  newLibraries: string = '';

  addLibrary() {
    if (this.newLibraries.trim()) {
      this.libraries.push(this.newLibraries);
      this.newLibraries = '';
    }
  }
}
