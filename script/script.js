// ----------------- Variables
const booksContainer = document.getElementById('books-container');
// Variables to hold the input ids
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');

// Create an array of objects for the books information
const books = [];

// Books constructor
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// A function to reload the books cards
function reloadBooks() {
  booksContainer.innerHTML = '';
  for (let index = 0; index < books.length; index += 1) {
    booksContainer.innerHTML += `<div class="book-card">
        <div class="book-title">${books[index].title}</div>
        <div class="book-author">${books[index].author}</div>
        <button class="card-remove-button" onclick="removeCard(${index})">Remove</button>
        <div id ='line'> </div>
      </div>`;
  }
}

// ------------------- Functions -------------------
// A function to remove current object from the array
function removeCard(index) {
  books.splice(index, 1);
  reloadBooks();
}

// Function to load newly added books
function loadBook(index) {
  booksContainer.innerHTML += `<div class="book-card">
  <div class="book-title">${books[index].title}</div>
  <div class="book-author">${books[index].author}</div>
  <button class="card-remove-button" onclick="removeCard(${index})">Remove</button>
  <div id ='line'> </div>
</div>`;
}

// A click listener for the add button to add inputs value as an object to the books array
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const newBook = new Book(titleInput.value, authorInput.value);
  books.push(newBook);
  loadBook(books.length - 1);
  localStorage.setItem('books', JSON.stringify(books));
});
removeCard();
