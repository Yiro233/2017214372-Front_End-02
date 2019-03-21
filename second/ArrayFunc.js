function func_1(array) {
   let arr = new Array();
   array.forEach(x => {
       if(!arr.includes(x)){
           arr.push(x);
       }
   });
   return arr;
}
function func_2(array) {
    let s = new Set();
    let arr = new Array();
    array.forEach(x => s.add(x));
    s.forEach(x => arr.push(x));
    return arr;
}
function func_3(array) {
    let arr = new Array();
    array.forEach(x => {
        if(!arr.find((n) => n == x)){
            arr.push(x);
        }
    });
    return arr;
}
var array = [1,2,2,3,4,5,6,6,6,6];
console.log(func_1(array));
console.log(func_2(array));
console.log(func_3(array));
