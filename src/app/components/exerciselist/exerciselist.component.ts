import { Component } from '@angular/core';

@Component({
  selector: 'app-exerciselist',

  templateUrl: './exerciselist.component.html',
  styleUrl: './exerciselist.component.css'
})
export class ExerciselistComponent {
  exercises: string[] = ['Push Up', 'Bench Press', 'Curl Ups'];
  newExercise: string = '';

  addExercise() {
    if (this.newExercise.trim()) {
      this.exercises.push(this.newExercise);
      this.newExercise = '';
    }
  }
}
