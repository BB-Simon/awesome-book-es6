import Book from './book.js';
import DrawBook from './draw-book.js';

class AwesomeBooks extends Book {
  constructor(books) {
    super(books);
    DrawBook.addBookToDOM(books, this.removeBook);
  }
}

export default AwesomeBooks;