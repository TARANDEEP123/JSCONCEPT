//JS Litle Question
console.log(0.1 == 0.1) //true
console.log(0.1+0.2) //0.30000000004
console.log(0.1+0.2 == 0.3) //FALSE
/**
 * Data Types - Null,Undefined,Boolean,String,Symbol,Number, Object
 * Case Sensative
 * Undefined- When variable is declared but not assigned
 * Null -Nonexistentor invalid value
 *  == compare values but === compare both value and type
 * JS is dynamically Typed. Variable type is checked at runtime
 * typeof NAN is number
 * **Note- isNaN() function converts the given value to a Number type, and then equates to NaN.
 * Non primitive data type is pass by reference
 * The this keyword inside an arrow function, does not refer to the object calling it. 
 * It rather inherits its value from the parent scope which is the window object in this case.

 */
//this will point to the object 
var obj1 = {
  valueOfThis: function(){
    return this;
  }
}
var obj2 = {
  valueOfThis: ()=>{
    return this;
  }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object

var obj = {
    name:"Tes",
    sss:"sss"
}
console.log(3+"3"); //"33"
console.log("2"-2); // 0

isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true


//The generator object consists of a method called next() , this method when called, executes the code until the nearest yield statement, and returns the yield value.

// Generator return an object with keys {value:2,done:True}

function* iteratorFunc() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
      count++;
      yield i;
  }
  return count;
}

let iterator = iteratorFunc();
console.log(iterator.next()); // {value:0,done:false}
console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next()); // {value:2,done:true}