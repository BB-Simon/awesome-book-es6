import DrawBook from './draw-book.js';
import Utils from './utils.js';

class Book {
  constructor(books) {
    this.books = books;
  }

  addBook = (book) => {
    this.books = [book, ...this.books];
    Utils.saveToLG(this.books);
    DrawBook.addBookToDOM(this.books, this.removeBook);
  }

  removeBook = (btn, id, container) => {
    const root = btn.parentNode;
    root.parentNode?.removeChild(root);
    this.books = this.books.filter((book) => book.id !== id);
    Utils.saveToLG(this.books);
    if (this.books.length === 0) {
      container.classList.remove('add-border');
      Utils.noBookMsg(container);
    }
  }
}

export default Book;