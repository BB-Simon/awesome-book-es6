import Utils from './utils.js';

export default class DrawBook {
  static bookContainer = document.getElementById('book-list');

  static addBookToDOM = (books, removeBook) => {
    if (books.length > 0) {
      DrawBook.bookContainer.classList.add('add-border');
      DrawBook.bookContainer.innerHTML = '';
      books.forEach((book) => {
        const li = document.createElement('li');
        li.classList.add('list-item');
        const h3 = document.createElement('h3');
        h3.innerText = `"${book.title}" by ${book.author}`;
        const btn = document.createElement('button');
        btn.classList.add('remove-book-btn');
        btn.innerText = 'Remove';
        li.appendChild(h3);
        li.appendChild(btn);
        DrawBook.bookContainer.appendChild(li);
        btn.addEventListener('click', () => {
          // Remove book from the list
          removeBook(btn, book.id, DrawBook.bookContainer);
        });
      });
    } else {
      Utils.noBookMsg(this.bookContainer);
    }
  }
}