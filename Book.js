class Book {
  constructor (title, author, pages, description, currentPage, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.currentPage = currentPage;
    this.read = read;
  }
  readBook (userInput){
    if ((userInput < 0) || (userInput > this.pages)){
      alert("Invalid Page Number");
    }
    else if (userInput == this.pages){  
              this.currentPage = userInput;
              this.read = true;
    }
    else{
              this.currentPage = userInput;
              this.read = false;
    }
  }
}
export { Book };
