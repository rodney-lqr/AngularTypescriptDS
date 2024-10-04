import { Component } from '@angular/core';

@Component({
  selector: 'app-toollist',

  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {
  tools: string[] = ['Hammer', 'Screwdriver', 'Hacksaw'];
  newTool: string = '';

  addTool() {
    if (this.newTool.trim()) {
      this.tools.push(this.newTool);
      this.newTool = '';
    }
  }
}
