function Books(title, author, pageNum, read) { // object constructor
	this.title = title;
	this.author = author;
	this.pageNum = pageNum;
	this.read = read == 1 ? "Y" : "N"; // 1 means read, 0 means not read yet
	this.info = function info(string) {
		return string = `${this.title} by ${this.author}, ${this.pageNum} pages, read: ${this.read}`;
	};
}

const rentalBook = new Books('The Book on Rental Property Investing: How to Create Wealth with Intelligent Buy and Hold Real Estate Investing', 'Brandon Turner', 356, 1);

const cleanCode = new Books('Clean Code: A Handbook of Agile Software Craftsmanship', 'Robert C. Martin', 464, 0);

const eloquentJavaScript = new Books('Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming', 'Marijn Haverbeke', 472, 0);

// console.log(rentalBook.info());
// console.log(cleanCode.info());
// console.log(eloquentJavaScript.info());

// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.

let libraryBooks = [];

function addLibraryBook(obj) {
	libraryBooks.push(obj);
}

// test books
addLibraryBook(eloquentJavaScript);
addLibraryBook(cleanCode);
addLibraryBook(rentalBook);

// console.log(libraryBooks);

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

const body = document.querySelector('body');
const booksDiv = document.createElement('div');
booksDiv.className = 'booksContainer';

function bookIterator(arr, childNode) {

	for (i = 0; i < arr.length; i++) {
		console.log(arr[i].title);
		// console.log(document.querySelectorAll('.titleListItem')[0].textContent);

		// if item is already displayed on page don't run actions below

		// make below section a standalone function to add book entry to web page

	}
	return;
}

bookIterator(libraryBooks, booksDiv);
body.appendChild(booksDiv);

function displayBookOnPage(obj){
  let listItems = [];
  const bookList = document.createElement('ul');
  bookList.className = "bookList";
  bookList.textContent = "";

  let titleListItem = document.createElement('li');
  titleListItem.className = "titleListItem";
  titleListItem.textContent = `${obj.title}`;
  listItems.push(titleListItem);

  let authorListItem = document.createElement('li');
  authorListItem.className = "authorListItem";
  authorListItem.textContent = `${obj.author}`;
  listItems.push(authorListItem);

  let pageNumListItem = document.createElement('li');
  pageNumListItem.className = "pageNumListItem";
  pageNumListItem.textContent = `${obj.pageNum}`;
  listItems.push(pageNumListItem);

  let readListItem = document.createElement('li');
  readListItem.className = "readListItem";
  readListItem.textContent = `${obj.read}`;
  listItems.push(readListItem);

  booksDiv.appendChild(bookList);
  bookList.appendChild(titleListItem);
  bookList.appendChild(authorListItem);
  bookList.appendChild(pageNumListItem);
  bookList.appendChild(readListItem);
}

displayBookOnPage(cleanCode)




// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

function formOpen() {
	document.getElementById("new-book-entry").style.display = "block";
}

function formClose() {
	document.getElementById("new-book-entry").style.display = "none";
}

// This section is for getting the data from the form and setting the variables for use in the object constructor.

let title = document.getElementById('book-title');
console.log(title);

let author = document.getElementById('book-author');
let pages = document.getElementById('book-pages');

let read = document.getElementById('book-read');
console.log(read);


const submitButton = document.querySelector('#submit-btn');
submitButton.addEventListener('click', (e) => {
	let newEntry = getInputValues(title.value, author.value, pages.value, read.checked);
  addLibraryBook(newEntry)
	return displayBookOnPage(newEntry)
	
});

// Need to implement function that takes values from inputs and displays under library row title. 

function getInputValues(title, author, pages, read) {
	const val = new Books(title, author, pages, read);
	return val;
}

// console.log(document.querySelectorAll('.titleListItem')[0].textContent);
// console.log(document.querySelectorAll('.titleListItem')[1].textContent);
// console.log(document.querySelectorAll('.titleListItem')[2].textContent);
// console.log(document.querySelectorAll('.titleListItem')[3].textContent);