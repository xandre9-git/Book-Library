function Books(title, author, pageNum, read) { // object constructor
  this.title = title
  this.author = author
  this.pageNum = pageNum
  this.read = read == 1 ? "Y":"N";  // 1 means read, 0 means not read yet
  this.info = function info(string){
   return string = `${this.title} by ${this.author}, ${this.pageNum} pages, read: ${this.read}`;
  }
}

const rentalBook = new Books('The Book on Rental Property Investing: How to Create Wealth with Intelligent Buy and Hold Real Estate Investing', 'Brandon Turner', 356, 1);

const cleanCode = new Books('Clean Code: A Handbook of Agile Software Craftsmanship', 'Robert C. Martin', 464, 0)

const eloquentJavaScript = new Books('Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming', 'Marijn Haverbeke', 472, 0);

// console.log(rentalBook.info());
// console.log(cleanCode.info());
// console.log(eloquentJavaScript.info());

// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.

let libraryBooks = [];

function addLibraryBook(obj) {
  libraryBooks.push(obj)
}

// test books
addLibraryBook(eloquentJavaScript);
addLibraryBook(cleanCode);
addLibraryBook(rentalBook);

// console.log(libraryBooks);

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

const body = document.querySelector('body');
const booksDiv = document.createElement('div');
const bookList = document.createElement('ul');
bookList.className = "bookList"
bookList.textContent = "";


// console.log(bookList);


booksDiv.appendChild(bookList);
console.log(booksDiv);

function bookIterator(arr, childNode){
  let listItem = document.createElement('li');
  listItem.className = "listItem"
  for (i = 0; i < arr.length; i++) {
    // console.log(i)
    console.log(arr[i])
    // console.log(arr[i].author);
    // console.log(arr[i].title);
    // console.log(arr[i].pageNum);
    // console.log(arr[i].read);
    // childNode.textContent = `${arr[i].title} ${arr[i].author} ${arr[i].pageNum} ${arr[i].read}`;
    // create new list item and append
    // booksDiv.appendChild(bookList);
    listItem.textContent = `${arr[i].title}`
    return bookList.appendChild(listItem);
    console.log(bookList);
  }
}

bookIterator(libraryBooks, booksDiv)

body.appendChild(booksDiv);

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

function formOpen() {
  document.getElementById("new-book-entry").style.display = "block";
}

function formClose() {
  document.getElementById("new-book-entry").style.display = "none";
}

// This section is for getting the data from the form and setting the variables for use in the object constructor.

let title = document.getElementById('book-title').value;


let author = document.getElementById('book-author').value;
let pages = document.getElementById('book-pages').value;
let read = document.getElementById('book-read').value;


// const submitButton = document.querySelector('.submit-btn');
// submitButton.addEventListener('click', ()=>{
//   let inputs = document.getElementsByTagName('input');
//   // console.log(inputs)

//   // alert('Works')
 
//   // function is to pull all input values and return as an object
// });

// console.log(title);
// console.log(author);
// console.log(pages);
// console.log(read);

const libraryRow = Array.from(document.getElementsByClassName('library-row'));
// console.log(libraryRow);

const libraryBox = document.createElement('div');
// console.log(libraryBox)
// let bookList = bookIterator(libraryBooks, libraryBox);
// console.log(bookList)




// Need to implement function that takes values from inputs and displays under library row title. 

function getInputValues(title, author, pages, read) {
  let val = new Books(title, author, pages, read)
  return val;
}

let testBook = getInputValues('Mark', "John", 612, 1);
// console.log(testBook)