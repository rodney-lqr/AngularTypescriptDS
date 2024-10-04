import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelist',

  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  softwares: string[] = ['Microsoft Word', 'Adobe Photoshop', 'OBS Studio'];
  newSoftware: string = '';

  addSoftware() {
    if (this.newSoftware.trim()) {
      this.softwares.push(this.newSoftware);
      this.newSoftware = '';
    }
  }
}
