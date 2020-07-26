function paginationFilter(arrayData, currentPage, rowOnPage) {
    if(!arrayData.length) return arrayData
    
    const startIndex = currentPage > 1 ? ((currentPage - 1) * rowOnPage) - 1 : 0;
    if(arrayData.length > startIndex + rowOnPage) {
        return arrayData.slice(startIndex, startIndex + rowOnPage);
    } else {
        return arrayData.slice(startIndex);
    }
}

function filterByStr(arrayData, str) {
    if(!str) return arrayData;
    
    return arrayData.filter((personData) => {

        return Object.keys(personData).some((key) => {

            if(typeof personData[key] === 'string') {
                return personData[key].includes(str);
            }
            if(typeof personData[key] === 'number') {
                return (personData[key] + '').includes(str);
            }
            return false;
        })
    });
}

function sortByColumnName(arrayData, sortingFild, isReverseSort = false) {
    if(sortingFild === 'id') {

        if(isReverseSort) {
            return arrayData.sort((person1, person2) => {
                return (+person2[sortingFild]) - (+person1[sortingFild]);
            });
        } else {
            return arrayData.sort((person1, person2) => {
                return (+person1[sortingFild]) - (+person2[sortingFild]);
            });
        }
    } else {
        
        if(isReverseSort) {
            return arrayData.sort((person1, person2) => {
                return person2[sortingFild].localeCompare(person1[sortingFild]);
            });
        } else {
            return arrayData.sort((person1, person2) => {
                return person1[sortingFild].localeCompare(person2[sortingFild]);
            });
        }
    }
}

function findPersonById(arrayData, id) {
    return arrayData.find((person) => person.id === id)
}

export { paginationFilter, filterByStr, sortByColumnName, findPersonById }