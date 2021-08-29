const tableEle = document.querySelector('.table-tbody');

function showTable(listOfBooks) {
	listOfBooks.forEach(book => {
		const trEle = document.createElement('tr');
		for (let key in book) {
			const tdEle = document.createElement('td');
			tdEle.innerHTML = book[key];
			trEle.appendChild(tdEle);
		}
		tableEle.appendChild(trEle);
	});
}

function addRow(book) {
	const trEle = document.createElement('tr');
	let inpName;
	for (let key in book) {
		const tdEle = document.createElement('td');
		if (key === 'name') {
			inpName = document.createElement('input');
			inpName.placeholder = 'Enter book name';
			inpName.className = 'inp-book-name';
			tdEle.appendChild(inpName);
		} else if (key === 'action') {
			const trBtn = document.createElement('button');
			trBtn.className = 'inp-add-btn'
			trBtn.innerHTML = 'Add the Book';
			trBtn.addEventListener('click', () => {
				book.name = inpName.value;
				this.addBook(book, trEle);
			});
			tdEle.appendChild(trBtn);
		} else {
			tdEle.innerHTML = book[key];
		}
		trEle.appendChild(tdEle);
	}
	tableEle.appendChild(trEle);
}