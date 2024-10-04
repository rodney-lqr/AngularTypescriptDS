import { Component } from '@angular/core';

@Component({
  selector: 'app-phonecontactlist',

  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  contacts: string[] = ['John Michael', 'Jessy James', 'Gus Fring'];
  newContact: string = '';

  addContact() {
    if (this.newContact.trim()) {
      this.contacts.push(this.newContact);
      this.newContact = '';
    }
  }
}
