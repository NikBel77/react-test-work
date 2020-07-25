function paginationFilter(arrayData, currentPage, rowOnPage) {
    if(typeof arrayData !== 'Array') throw new Error('type of data mast be array');
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