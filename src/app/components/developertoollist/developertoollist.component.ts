import { Component } from '@angular/core';

@Component({
  selector: 'app-developertoollist',

  templateUrl: './developertoollist.component.html',
  styleUrl: './developertoollist.component.css'
})
export class DevelopertoollistComponent {
  devTools: string[] = ['Visual Studio Code', 'GitHub', 'WebStorm'];
  newDevTools: string = '';

  addDevTool() {
    if (this.newDevTools.trim()) {
      this.devTools.push(this.newDevTools);
      this.newDevTools = '';
    }
  }
}
