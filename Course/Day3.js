function printTen(){
    for (let i = 0;i<10;i++)
        console.log(i);
}
function arrayOut(array){
    let newArray = [];
    for(let i = 0;i<array.length;i++){
        console.log(array[i]);
        newArray.push(array[i]);
    }
    return newArray;
}
function arrayOutTwice(array){
    let newArray = [];
    for(let i = 0;i<array.length;i++){
        console.log(array[i]);
        newArray.push(array[i]);
    }
}
function reducer(value1,value2) {
    return value1.concat(value2);
}
let arrayOne = [[1,2,3],[2]];
let result = arrayOne.reduce(reducer);
console.log(result);

function multiplier(x) {
    let num = x;
    return (a) => (a*x);
};
let twice = multiplier(2);
console.log(twice(2));
