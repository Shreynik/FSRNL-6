function addBook(board) {
    const title = document.getElementById('add-book-title');
    const author = document.getElementById('add-book-author');
    board.addRow({
      id: board.books.length + 1,
      title: title.value,
      author: author.value,
      lender: board.userValue,
      borrower: '-',
      action: '-'
    })
  }