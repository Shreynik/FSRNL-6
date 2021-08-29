
(function test() {

	const userInpEl = document.querySelector('#user-input');
	const userSubmitEl = document.querySelector('#user-submit-btn');

	const initalBooks = [
		{
			id: '1',
			name: 'book1',
			lender: 'shreynik',
			borrower: null
		},
		{
			id: '2',
			name: 'book2',
			lender: 'ssdfsdf',
			borrower: 'shreynik'
		},
		{
			id: '3',
			name: 'book3',
			lender: 'sdsfafsdf',
			borrower: null
		}
	];

	class Store {

		constructor(list) {
			this.bookList = list;
			this.lastId = list.length;
		}

		render() {
			// render the books
			showTable(this.bookList);
			userSubmitEl.addEventListener('click', this.handleLogin.bind(this));
		}

		handleLogin() {
			const userName = userInpEl.value;
			if (userName) {
				userSubmitEl.disabled = true;
				this.user = userName;
				const book = {
					id: '',
					name: '',
					lender: this.user,
					borrower: null,
					action: ''
				};
				this.lastId++;
				book.id = this.lastId;
				addRow.bind(this)(book);
			}
		}

		handleActions() {

		}


		addBook(book, trEleToRemove) {
			const { id, name, lender } = book;
			const bookToSave = {
				id, name, lender,
				borrower: '-', action: 'Book Added'
			};
			trEleToRemove.remove();
			this.bookList.push(bookToSave);
			showTable([bookToSave]);
			userSubmitEl.disabled = false;
		}

	}

	document.body.onload = function () {
		const myStore = new Store(initalBooks);
		myStore.render();
	}

})();
