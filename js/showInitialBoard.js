function showInitialBoard(board) {

    const table = document.getElementById('book-table');
    const headings = ['id', 'title', 'author', 'lender', 'borrower', 'action'];
    let mainTr = document.createElement('tr');
  
    for (let i = 0; i < 6; i++) {
      const th = document.createElement('th');
      th.appendChild(document.createTextNode(headings[i]));
      mainTr.appendChild(th);
    }
    table.appendChild(mainTr)
    board.books.forEach(element => {
  
  
      mainTr = document.createElement('tr');
      for (let i = 0; i < 6; i++) {
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(element[headings[i]]));
        mainTr.appendChild(td);
      }
      table.appendChild(mainTr)
    });
  
    showAddBookOption(board);
  
  }