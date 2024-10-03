import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',

  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  books: string[] = ["To Kill a Mockingbird", "1984", 'Ready Player One'];
  newBooks: string = '';

  addBooks() {
    if (this.newBooks.trim()) {
      this.books.push(this.newBooks);
      this.newBooks = '';
    }
  }

}
