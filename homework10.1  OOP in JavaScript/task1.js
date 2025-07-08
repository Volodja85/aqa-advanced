const Book = require('./Book.js');
const EBook = require('./EBook');

const book11 = new Book('Пеппі Довгапанчоха_2', 'Астрід Ліндґрен', 1945);
const book21 = new Book('Північне сяйво_2', 'Філіп Пулман', 1995);
const ebook11 = new EBook('Кобзар_2', 'Тарас Шевченко', 1840, 'APG');
book11.printInfo();
book21.printInfo();
ebook11.printInfo();

const books = [book11, book21, ebook11];
const oldest = Book.OldBooks(books);
console.log('Hайдавніша книга за роком видання:');
console.log(oldest);

const newEbook = EBook.createEBook(book21, '.xlsx');
newEbook.printInfo();
