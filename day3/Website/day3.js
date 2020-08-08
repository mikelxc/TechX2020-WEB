printNum = function(a, b, c) {
    let start = a;
    let end = b;
    let step = c;
    let i;
    let array = [];

    if (step > 0) {
        for (i = start; i <= end; i += step) {
            array.push(i);
        }
    } else if (step < 0) {
        for (i = start; i >= end; i += step) {
            array.push(i);
        }
    } else {
        console.log("step cannot be 0");
    }
    return array;
}
arraySum = function(targetArray) {
    let sum = 0;
    for (let n = 0; n < targetArray.length; n++) {
        sum += targetArray[n];
    }
    console.log(sum);
}
//arraySum(printNum(1, 10, 1));

let plus = (x, y) => {
    return x + y;
}

const square = x => x*x;

//console.log(plus(2, 2));

//console.log(square(6));

let arr = [[1, 2], [3], [4, 5], [6, 7, 8], [9]];
let newArr = function(array) {
    let newArr = [];
    for (let E = 0; E < array.length; E++) {
        let a = array[E];
        for (let e = 0; e < a.length; e++) {
            newArr.push(a[e]);
        }
    }
    return newArr;
}
console.log(newArr(arr));