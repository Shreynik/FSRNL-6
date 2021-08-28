function showTable(listOfBooks){
    const tableEle = document.getElementsByTagName('table')[0];
    tableEle.style.border="1px solid red"
    listOfBooks.forEach(book => {
        const trEle = document.createElement('tr');
        const allTds = [];
        for(let key in book){
            const tdEle = document.createElement('td');
            tdEle.innerHTML = book[key];
            allTds.push(tdEle);
        }
        allTds.forEach(td=>{
            trEle.appendChild(td);
        })
        tableEle.appendChild(trEle);
    });
}