class Book {
	constructor(name, author, year) {
		this._name = name;
		this._author = author;
		this._year = year;
	}

	get name() {
		return this._name;
	}

	get author() {
		return this._author;
	}

	get year() {
		return this._year;
	}

	set name(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Назва не відповідає відповдному формату');
		}
		this._name = value;
	}

	set author(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error("Введіть правильне ім'я автора");
		}
		this._author = value;
	}

	set year(value) {
		if (typeof value !== 'number' || value < 0 || !year.isInteger(value)) {
			throw new Error('Невірний формат року');
		}
		this._year = value;
	}

	printInfo() {
		console.log(`Назва: ${this._name}, Автор: ${this._author}, Рік: ${this._year}`);
	}

	static OldBooks(books) {
		let oldBooks = books[0];

		for (let book of books) {
			if (book.year < oldBooks.year) {
				oldBooks = book;
			}
		}

		return oldBooks;
	}
}

const book1 = new Book('Пеппі Довгапанчоха', 'Астрід Ліндґрен', 1945);
const book2 = new Book('Північне сяйво', 'Філіп Пулман', 1995);
const book3 = new Book('Кобзар', 'Тарас Шевченко', 1840);

book1.printInfo();
book2.printInfo();
book3.printInfo();

//export default Book;
module.exports = Book;
