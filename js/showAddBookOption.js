function showAddBookOption(board) {
    if (board.isUserLoggedIn === true) {
      const totalBooks = board.books.length;
      const table = document.getElementById('book-table');
      const inputTitle = document.createElement('input');
      inputTitle.type = 'text';
      inputTitle.id = 'add-book-title';
      const authorTitle = document.createElement('input');
      authorTitle.type = 'text';
      authorTitle.id = 'add-book-author'
      const actionButton = document.createElement('input');
      actionButton.type = 'submit';
      actionButton.value = 'add book';
      actionButton.id = 'add-book-button';
      actionButton.addEventListener('click', () => addBook(board));
      const mainTr = document.createElement('tr');
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(totalBooks + 1));
      mainTr.appendChild(td);
      td = document.createElement('td');
      td.appendChild(inputTitle);
      mainTr.appendChild(td);
      td = document.createElement('td');
      td.appendChild(authorTitle);
      mainTr.appendChild(td);
      td = document.createElement('td');
      td.appendChild(document.createTextNode(board.userValue));
      mainTr.appendChild(td);
      td = document.createElement('td');
      td.appendChild(document.createTextNode('-'));
      mainTr.appendChild(td);
      td = document.createElement('td');
      td.appendChild(actionButton);
      mainTr.appendChild(td);
      table.appendChild(mainTr);
  
    }
  }