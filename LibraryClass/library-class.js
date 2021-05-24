// Implementing a Llibrary Class

// Creating a class 'Library'
class Library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedBooks = {};
  }

  //   Function - Returns the booklist of the class Library
  getBookList() {
    Array.from(this.bookList).forEach((element) => {
      console.log(element);
    });
  }

  //   Function - Issues Book to an User
  issueBook(bookname, user) {
    if (this.issuedBooks[bookname] == undefined) {
      this.issuedBooks[bookname] = user;
      console.log(`${bookname} is issued to ${user} for 10 days.`);
    } else {
      console.log("The book is already issued.");
    }
  }

  //   Function - Adds the book again to the issuedBooks
  returnBook(bookname) {
    delete this.issuedBooks[bookname];
    console.log("Successfully Returned!");
  }
}

// Implementing all functions of class Library
let myLibrary = new Library(["Book1, Book2, Book3, Book4"]);
myLibrary.getBookList();
myLibrary.issueBook("Book2", "Ayush");
myLibrary.returnBook("Book2");
myLibrary.issueBook("Book2", "Pranav");
