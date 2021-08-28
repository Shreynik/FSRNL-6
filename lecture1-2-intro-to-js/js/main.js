(function () {
    'use strict'
    //Board constructor object and assign some properties to its prototype
    function Board() {
      this.books = [{
        id: 1,
        title: 'Book1',
        author: 'author1',
        lender: 'userc',
        borrower: 'userb',
        action: 'request next'
      }, {
        id: 2,
        title: 'Book2',
        author: 'author2',
        lender: 'userd',
        borrower: '-',
        action: 'borrow'
      }, {
        id: 3,
        title: 'Book3',
        author: 'author3',
        lender: 'userd',
        borrower: 'userc',
        action: 'Requested bu userb'
      }],
      this.isUserLoggedIn = false;
      this.userValue = '';
    }
  
    Board.prototype.render = function () {
      console.log('store is ', this);
      showInitialBoard(this);
      loginUserFlow(this);
    }
  
    Board.prototype.clear = function () {
      const table = document.getElementById('book-table');
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
    }
  
    Board.prototype.renderAppropriateActions = function () {
      let userValue = this.userValue;
      this.books = this.books.map((book) => {
        if (book.lender === userValue) {
          book.action = '-'
        } else if (book.borrower !== '-') {
          book.action = 'return'
        } else {
          book.action = 'borrow';
        }
        return book;
      })
    }
  
    Board.prototype.loginUser = function (value) {
      this.isUserLoggedIn = true;
      this.userValue = value;
      this.clear();
      this.renderAppropriateActions();
      showInitialBoard(this);
    }
  
    Board.prototype.addRow = function (row) {
      console.log('store is ', this);
      this.clear();
      this.books.push({
        id: row.id,
        title: row.title,
        author: row.author,
        lender: row.lender,
        borrower: row.borrower,
        action: row.action
      })
  
      showInitialBoard(this);
    }
    //Onloading the document render the board.The code starts from here
    document.body.onload = function () {
      var board = new Board()
      board.render()
  
    }
  }())
  