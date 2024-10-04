import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardwarelist',

  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  compHardwares: string[] = ['Motherboard', 'Graphics Card', 'CPU'];
  newHardwares: string = '';

  addHardwares() {
    if (this.newHardwares.trim()) {
      this.compHardwares.push(this.newHardwares);
      this.newHardwares = '';
    }
  }
}
