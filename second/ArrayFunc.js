function deDupWithIncludes(array) {
    let res = new Array();
    array.forEach(src => {
        if (!res.includes(src)) {
            res.push(src);
        }
    });
    return res;
}

function deDupWithSet(array) {
    let tranSet = new Set();
    let res = new Array();
    array.forEach(src => tranSet.add(src));
    tranSet.forEach(src => res.push(src));
    return res;
}

function deDupWithFind(array) {
    let res = new Array();
    array.forEach(des => {
        if (!res.find((src) => src == des)) {
            res.push(des);
        }
    });
    return res;
}
var array = [1, 2, 2, 3, 4, 5, 6, 6, 6, 6];
console.log(deDupWithIncludes(array));
console.log(deDupWithSet(array));
console.log(deDupWithFind(array));
