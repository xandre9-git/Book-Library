// GLOBALS

let listItems = [];

const cleanCode = new Books(
  "Clean Code: A Handbook of Agile Software Craftsmanship",
  "Robert C. Martin",
  464,
  0
);

function Books(title, author, pageNum, read) {
	// object constructor
	this.title = title;
	this.author = author;
	this.pageNum = pageNum;
	this.read = read;
	this.info = function info() {
		return `${this.title} by ${this.author}. It has ${this.pageNum} pages and is currently ${this.read}.`;
	};
}

// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.

// JSON.parse(window.localStorage.getItem()) is used to get data set on line 114. It had to be parsed from a string back to an object.
let libraryBooks = JSON.parse(window.localStorage.getItem("book"));
// let libraryBooks = [];

function addLibraryBook(obj) {
	libraryBooks = [];
	libraryBooks = JSON.parse(window.localStorage.getItem("book"));
	libraryBooks.push(obj);
}


// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

const body = document.querySelector("body");
const booksDiv = document.createElement("div");
booksDiv.className = "booksContainer";

function bookIterator(arr) {
		for (let i = 0; i < arr.length; i++) {
			displayBookOnPage(arr[i], i);
		}
	
	return;
}

bookIterator(libraryBooks);
body.appendChild(booksDiv);

function displayBookOnPage(obj, index) {
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

	let readListItem = document.createElement("input");
	readListItem.className = "readListItem";
	readListItem.type = "checkbox";
	readListItem.checked = obj.read;
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
	// reloads the page so new entries can be modified.
	document.location.reload();
	displayBookOnPage(newEntry);
	return newEntry;
});

// function that takes values from inputs and displays under library row title.
function getInputValues(title, author, pages, read) {
	const val = new Books(title, author, pages, read);
	return val;
}

// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

function deleteBookEntry(selection) {
	// this will remove respective book object from libraryBooks array
	libraryBooks.splice(selection, 1);
	document.location.reload();
}

const deleteButton = document.querySelectorAll("#delete-btn");
let deleteButtonArray = Array.from(deleteButton);

// forEach below has two args; event and iterator
deleteButtonArray.forEach((e, i) => {
	e.addEventListener("click", () => {
		deleteBookEntry(i);
		booksDiv.removeChild(document.querySelectorAll('.bookList')[i]);
		window.localStorage.setItem("book", JSON.stringify(libraryBooks));
	});
});

// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

function modifyReadStatus(bool, index) {
	libraryBooks[index].read = bool;
}

const readCheckBox = document.querySelectorAll('input.readListItem');
let readCheckBoxArray = Array.from(readCheckBox);

readCheckBoxArray.forEach((e, i) => {
	e.addEventListener('click', (e) => {
		// set respective read value in library array
		modifyReadStatus(e.target.checked, i);
		window.localStorage.setItem("book", JSON.stringify(libraryBooks));
	});
});