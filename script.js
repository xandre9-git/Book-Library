function Books(title, author, pageNum, read) { // object constructor
  this.title = title
  this.author = author
  this.pageNum = pageNum
  this.read = read  // 1 means read, 0 means not read yet
  this.info = function info(string){
   return string = `${this.title} by ${this.author}, ${this.pageNum} pages, ${this.read == 1 ? "read" : "not read yet"}`;
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

addLibraryBook(eloquentJavaScript);
addLibraryBook(cleanCode);
addLibraryBook(rentalBook);

// console.log(libraryBooks);


// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

function bookIterator(arr){

  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// bookIterator(libraryBooks)

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

function formOpen() {
  document.getElementById("new-book-entry").style.display = "block";
}

function formClose() {
  document.getElementById("new-book-entry").style.display = "none";
}