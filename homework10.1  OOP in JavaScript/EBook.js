//import Book from "./Book.js";
const Book = require("./Book.js");
//const Book = require("./Book");

class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Файл є порожній");
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(
      `Назва: ${this.name}, Автор: ${this.author}, Рік: ${this.year}, Формат: ${this._fileFormat}`
    );
  }

  static createEBook(bookInstance, format) {
    return new EBook(
      bookInstance.name,
      bookInstance.author,
      bookInstance.year,
      format
    );
  }
}

const ebook1 = new EBook("Енеїда", "Іван Котляревський", 1842, "PDF");
ebook1.printInfo();

module.exports = EBook;
