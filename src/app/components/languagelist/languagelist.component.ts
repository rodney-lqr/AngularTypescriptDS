import { Component } from '@angular/core';

@Component({
  selector: 'app-languagelist',

  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent {
  languages: string[] = ['Python', 'Java', 'Kotlin'];
  newLanguage: string = '';

  addLanguage() {
    if (this.newLanguage.trim()) {
      this.languages.push(this.newLanguage);
      this.newLanguage = '';
    }
  }
}
