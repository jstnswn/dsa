function fetchItemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber) {
    sortItems(items, sortOrder, sortParameter)
    const book = [];
    let pageItems = [];
    let pageCounter = 1;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        pageItems.push(item);
        if (pageCounter % itemsPerPage === 0 || i === items.length - 1) {
            book.push(pageItems);
            pageItems = [];
        }
        pageCounter++;
    }

    // console.log(book[pageNumber].map(el => el[0]))
    return book[pageNumber].map(el => el[0]);
}

function sortItems(items, sortOrder, sortParameter) {
    if (sortParameter > 0) {
        items.sort((a, b) => {
            if (sortOrder === 0) {
                return Number(a[sortParameter]) - Number(b[sortParameter])
            } else {
                return Number(b[sortParameter]) - Number(a[sortParameter])
            }
        })
    } else {
        items.sort((a, b) => {
            if (sortOrder === 0) {
                if (a[sortParameter] < b[sortParameter]) return -1;
                else return 1;
            } else {
                if (a[sortParameter] < b[sortParameter]) return 1;
                else return -1;
            }
        })
    }

}
