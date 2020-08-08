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
//console.log(newArr(arr));

let newNumber = 66;
let disintegrate = function(number) {
    multiple = parseInt(number / 5);
    return multiple;
}
let remain = newNumber - 5*disintegrate(newNumber);
//console.log(newNumber + " = " + disintegrate(newNumber) + " * 5 + " + remain);
let factorize = function(number) {
    if (number / 2 == parseInt(number/2)) {
        return "2 * " + number/2;
    } else if (number / 3 == parseInt(number/3)){
        return "3 * " + number/3;
    } else if (number / 5 == parseInt(number/5)){
        return "5 * " + number/5;
    } else {
        return "1 * " + number;
    }
}
//console.log(newNumber + " = " + factorize(newNumber-3) + " + 3");