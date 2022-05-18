//sum(1)(2)(3)....(n)()

/**
 * SO take a smaller problem first sum(1)(2)(3)()
 * 
 */

// let sum = function (a) {
//     return function(b) {
//         return function(c){
//             return a+b+c;

//         }
//     }
// }
// console.log(sum(1)(2)(3));
/**This is the repetation */
let sum = function (a) {
    return function(b) {
        if(!b){
            return a;
        }
        return sum(a+b);
    }
}

console.log(sum(1)(2)(3)());

