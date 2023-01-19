import AwesomeBooks from './modules/awesome-book.js';
import Navigation from './modules/nav-tab.js';
import Time from './modules/time.js';

const addBookForm = document.getElementById('add-book');
const books = JSON.parse(localStorage.getItem('books')) || [];
const book = new AwesomeBooks(books);

(() => new Navigation())();
Time.now();

const handleSubmit = (e) => {
  e.preventDefault();
  const title = addBookForm.title.value;
  const author = addBookForm.author.value;
  const newBook = { title, author, id: `${Date.now()}` };
  book.addBook(newBook);
  e.target.reset();
};

addBookForm.addEventListener('submit', handleSubmit);
