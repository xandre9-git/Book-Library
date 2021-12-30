function Books(title, author, pageNum, read) {
  // object constructor
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
  this.read = read == 1 ? "read" : "unread"; // 1 means read, 0 means not read yet
  this.info = function info() {
    return `${this.title} by ${this.author}. It has ${this.pageNum} pages and is currently ${this.read}.`;
  };
}

const rentalBook = new Books(
  "The Book on Rental Property Investing: How to Create Wealth with Intelligent Buy and Hold Real Estate Investing",
  "Brandon Turner",
  356,
  1
);
const cleanCode = new Books(
  "Clean Code: A Handbook of Agile Software Craftsmanship",
  "Robert C. Martin",
  464,
  0
);
const eloquentJavaScript = new Books(
  "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
  "Marijn Haverbeke",
  472,
  0
);

console.log(rentalBook.info());

// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.

// JSON.parse(window.localStorage.getItem()) is used to get data set on line 114. It had to be parsed from string back to an object.
let libraryBooks = JSON.parse(window.localStorage.getItem("book"));
console.log(libraryBooks);

function addLibraryBook(obj) {
  libraryBooks.push(obj);
}

// test books
// addLibraryBook(eloquentJavaScript);
// addLibraryBook(cleanCode);
// addLibraryBook(rentalBook);

// console.log(libraryBooks);

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

const body = document.querySelector("body");
const booksDiv = document.createElement("div");
booksDiv.className = "booksContainer";

function bookIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].title);
		
		console.log(arr[i])
    displayBookOnPage(arr[i], i);
  }
  return;
}

bookIterator(libraryBooks);
body.appendChild(booksDiv);

function displayBookOnPage(obj, index) {
  let listItems = [];
  const bookList = document.createElement("ul");
  bookList.className = "bookList";
  bookList.textContent = "";
  bookList.dataset.indexNumber = index;

  let titleListItem = document.createElement("li");
  titleListItem.className = "titleListItem";
  titleListItem.textContent = `${obj.title}`;
  listItems.push(titleListItem);

  let authorListItem = document.createElement("li");
  authorListItem.className = "authorListItem";
  authorListItem.textContent = `${obj.author}`;
  listItems.push(authorListItem);

  let pageNumListItem = document.createElement("li");
  pageNumListItem.className = "pageNumListItem";
  pageNumListItem.textContent = `${obj.pageNum}`;
  listItems.push(pageNumListItem);

  let readListItem = document.createElement("li");
  readListItem.className = "readListItem";
  readListItem.textContent = `${obj.read}`;
  listItems.push(readListItem);

  let deleteListItem = document.createElement("input");
  deleteListItem.id = "delete-btn";
  deleteListItem.className = "deleteListItem";
  deleteListItem.type = "image";
  deleteListItem.src = "images/trash-bin.png";
  listItems.push(deleteListItem);

  booksDiv.appendChild(bookList);
  bookList.appendChild(titleListItem);
  bookList.appendChild(authorListItem);
  bookList.appendChild(pageNumListItem);
  bookList.appendChild(readListItem);
  bookList.appendChild(deleteListItem);
  return listItems;
}

// displayBookOnPage(cleanCode)

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

function formOpen() {
  document.getElementById("new-book-entry").style.display = "block";
}

function formClose() {
  document.getElementById("new-book-entry").style.display = "none";
}

// This section is for getting the data from the form and setting the variables for use in the object constructor.

let title = document.getElementById("book-title");
let author = document.getElementById("book-author");
let pages = document.getElementById("book-pages");
let read = document.getElementById("book-read");

const submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("click", () => {
  let newEntry = getInputValues(
    title.value,
    author.value,
    pages.value,
    read.checked
  );
  addLibraryBook(newEntry);
  // localStorage.setItem(key, value) needs to occur here in order to save new book entry into libraryBook array permanently
  // localStorage can only store strings, objects/arrays will need to be converted using JSON.stringify() before passing into above function
  window.localStorage.setItem("book", JSON.stringify(libraryBooks));
  return displayBookOnPage(newEntry);
});

// Need to implement function that takes values from inputs and displays under library row title.

function getInputValues(title, author, pages, read) {
  const val = new Books(title, author, pages, read);
  return val;
}

// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

function deleteBookEntry(selection) {
  // this will remove respective book object from libraryBooks array
  libraryBooks.splice(selection, 1);
}

// 1. user clicks trash can
// 2. program needs to select respective object from libraryBook array

const deleteButton = document.querySelectorAll("#delete-btn");
console.log(deleteButton[0])
console.log(deleteButton[1])
console.log(deleteButton[2])
console.log(deleteButton[3])
deleteButton.forEach((e) => {

  e.addEventListener("click", (e) => {
    // alert("Pop up!");
		console.log(e.target)
		// console.log(libraryBooks[e])
		console.log(e)
		// deleteBookEntry(e)
		for (let i = 0; i < libraryBooks.length; i++){
			console.log(i);
		}
  });
});
console.log(deleteButton);
