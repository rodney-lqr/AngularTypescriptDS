import { Component } from '@angular/core';

@Component({
  selector: 'app-animallist',

  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animals: string[] = ['Lion', 'Elephant', 'Tiger'];
  newAnimals: string = '';

  addAnimal() {
    if (this.newAnimals.trim()) {
      this.animals.push(this.newAnimals);
      this.newAnimals = '';
    }
  }
}
