import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapplist',

  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent {
  mobileApps: string[] = ['Facebook', 'Instagram', 'Youtube'];
  newMobileApps: string = '';

  addApps() {
    if (this.newMobileApps.trim()) {
      this.mobileApps.push(this.newMobileApps);
      this.newMobileApps = '';
    }
  }
}
