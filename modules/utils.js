class Utils {
  static saveToLG = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  };

  static noBookMsg = (container) => {
    const p = document.createElement('p');
    p.style.textAlign = 'center';
    p.innerText = 'No book added yet';
    p.style.color = 'red';
    container.append(p);
  }
}

export default Utils;