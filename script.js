// Local Storage Starts Here
let books = [];

books = JSON.parse(window.localStorage.getItem('books'));
if (!books) {
  books = [];
}

function saveToLocalStorage() {
  window.localStorage.setItem('books', JSON.stringify(books));
}
// Local Storage Ends Here

// Display Books in List starts Here
function displayBooks() {
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = '';
  books.forEach((book, index) => {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `<p>${book.title}</p>
    <p>${book.author}</p>
    <button>Remove</button>
    <hr>`;

    booksContainer.appendChild(bookItem);
    booksContainer.childNodes[index].childNodes[4].onclick = () => {
      const newBooks = books.filter((book, innerIndex) => index !== innerIndex);
      books = newBooks;
      saveToLocalStorage();
      displayBooks();
    };
  });
}

displayBooks();

// Display Books in List ends Here

// Add New Book Starts
const addNewBook = document.getElementById('add-new-book');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

function addBookItem(title, author) {
  const newBook = {
    title,
    author,
  };
  books.push(newBook);
  saveToLocalStorage();
  titleInput.value = '';
  authorInput.value = '';
}

addNewBook.addEventListener('click', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  addBookItem(title, author);
  displayBooks();
});

// Add New Book Ends
