
(function test(){

    const initalBooks = [
        {
            id: '1',
            name:'book1',
            lender: 'shreynik',
            borrower: null
        },
        {
            id: '2',
            name:'book2',
            lender: 'ssdfsdf',
            borrower: 'shreynik'
        },
        {
            id: '3',
            name:'book3',
            lender: 'sdsfafsdf',
            borrower: null
        }
    ];

    class Store{

        constructor(list){
            this.bookList = list
        }

        render(){
            // render the books
            showTable(this.bookList)
        }

        handleLogin(){

        }

        handleActions(){

        }


        addBook(){
            
        }

    }

    document.body.onload = function(){
        const myStore = new Store(initalBooks);
        myStore.render();
    }

})();
