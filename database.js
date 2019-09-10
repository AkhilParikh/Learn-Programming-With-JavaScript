import { Book } from './Book.js';
const bookOne = new Book ("title1", "author1", 100,"My first book",1, false);
const bookTwo = new Book ("title2", "author2", 80,"My second book",1, false);
const bookThree = new Book ("title3", "author3", 150,"My third book",1, false);
const bookFour = new Book ("title4", "author4", 1000,"My fourth book",1, false);

bookOne.readBook(bookOne.currentPage);
bookTwo.readBook(bookTwo.currentPage);
bookThree.readBook(bookThree.currentPage);
bookFour.readBook(bookFour.currentPage);

const bookList = [bookOne, bookTwo, bookThree, bookFour];
export { bookList };
