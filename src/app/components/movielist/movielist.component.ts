import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',

  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movies: string[] = ['Inception', 'Interstellar', 'How To Train Your Dragon'];
  newMovies: string = '';

  addMovies() {
    if (this.newMovies.trim()) {
      this.movies.push(this.newMovies );
      this.newMovies = '';
    }
  }

}
