import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworklist',

  templateUrl: './frameworklist.component.html',
  styleUrl: './frameworklist.component.css'
})
export class FrameworklistComponent {
  frameworks: string[] = ['Angular', 'React', 'Bootstrap'];
  newFramework: string = '';

  addFramework() {
    if (this.newFramework.trim()) {
      this.frameworks.push(this.newFramework);
      this.newFramework = '';
    }
  }
}
