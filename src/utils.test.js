import { paginationFilter, filterByStr, sortByColumnName, countPaginationNumbers } from './utils'

describe('countPaginationNumbers', () => {
    test('simple pagination', () => {
        const res = countPaginationNumbers(1, 10);
        expect(res).toStrictEqual([1,2,3,4,5,6,7]);
    });
    test('simple pagination', () => {
        const res = countPaginationNumbers(5, 10);
        expect(res).toStrictEqual([2,3,4,5,6,7,8]);
    });
    test('simple pagination', () => {
        const res = countPaginationNumbers(10, 10);
        expect(res).toStrictEqual([4,5,6,7,8,9,10]);
    });
});

describe('sortByColumnName', () => {
    const data = [{id: 4}, {id: 3}, {id: 7}, {id: 66}, {id: 13}]

    test('sort by id', () => {
        const res = sortByColumnName(data, 'id', false);
        expect(res).toStrictEqual([{id: 3}, {id: 4}, {id: 7}, {id: 13}, {id: 66}]);
    });
    test('reverse sort by id', () => {
        const res = sortByColumnName(data, 'id', true);
        expect(res).toStrictEqual([{id: 66}, {id: 13}, {id: 7}, {id: 4}, {id: 3}]);
    });

    const stringData = [{name: 'h'}, {name: 'z'}, {name: 'a'}, {name: 'b'}, {name: 'x'}];

    test('sort by string', () => {
        const res = sortByColumnName(stringData, 'name', false);
        expect(res).toStrictEqual([{name: 'a'}, {name: 'b'}, {name: 'h'}, {name: 'x'}, {name: 'z'}]);
    });
    test('reverse sort by string', () => {
        const res = sortByColumnName(stringData, 'name', true);
        expect(res).toStrictEqual([{name: 'z'}, {name: 'x'}, {name: 'h'}, {name: 'b'}, {name: 'a'}]);
    });
});

describe('filterByStr', () => {
    const data = [{name: 'name'}, {name: 'AbCd'}, {name: 'fild'}, {name: 'object'}, {id: 1234}];

    test('filter objects by string', () => {
        const res = filterByStr(data, 'name');
        expect(res).toStrictEqual([{name: 'name'}]);
    });
    test('filter objects by string', () => {
        const res = filterByStr(data, 'object');
        expect(res).toStrictEqual([{name: 'object'}]);
    });
    test('not case-sensitive', () => {
        const res = filterByStr(data, 'aBcD');
        expect(res).toStrictEqual([{name: 'AbCd'}]);
    });
    test('find numbers', () => {
        const res = filterByStr(data, '1234');
        expect(res).toStrictEqual([{id: 1234}]);
    });
});

describe('paginationFilter', () => {
    const data = new Array(97).fill(0);
    const smallData = new Array(3).fill(0);

    test('slice array', () => {
        const res = paginationFilter(data, 3, 10);
        expect(res).toStrictEqual(new Array(10).fill(0));
    });
    test('slice end of array', () => {
        const res = paginationFilter(data, 10, 10);
        expect(res).toStrictEqual(new Array(8).fill(0));
    });
    test('test small data', () => {
        const res = paginationFilter(smallData, 1, 10);
        expect(res).toStrictEqual(new Array(3).fill(0));
    });
});

