// let multiply = function(x,y) {
//     console.log(x*y);
// }

//let multiplyByTwo = multiply.bind(this, 2);
//multiplyByTwo(3);

//let multiplyByTwo = multiply.bind(this, 2, 3);
//multiplyByTwo();
//let multiplyByTwo = multiply.bind(this);
//multiplyByTwo(2,3);



//By closure

let multiply = function(x) {
    return function(y) {
        console.log(x*y);
    }
}

multiply(2)(3);
// multiplyByTwo(3);