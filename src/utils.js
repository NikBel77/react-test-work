function paginationFilter(arrayData, currentPage, rowOnPage) {
    if(typeof arrayData !== 'Array') throw new Error('type of data mast be array');
}

function filterByStr(arrayData, str) {
    // return arrayData.map(() => {});
}

function sortByColumnName(arrayData, sortingFild, isReverseSort = false) {
    // return arrayData.sort((person1, person2) => {});
}

function findPersonById(arrayData, id) {
    return arrayData.find((person) => person.id === id)
}

export { paginationFilter, filterByStr, sortByColumnName, findPersonById }