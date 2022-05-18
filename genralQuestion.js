// console.log(1 == 1);//true
// console.log(1=='1');//true
// console.log('3'=='3');//true
// console.log(1 == true);//true
// console.log(null == undefined);//true
// console.log(0==null);//false
// console.log(0==undefined);//false
// console.log('taran'==new String('taran'));//true
// console.log(new String('test')== new String('test'));//false
// console.log([]==[]);//false
// console.log([1]==[1]);//false




// let b;
// const a; // SyntaxError: Missing initializer in const declaration
// console.log(b);
// console.log(a);
// a=7; 
// b=10;

//Which line throws an error?



// print1();
// var print1 = function(){
//     console.log('Printer 1');
// }
// print1();
// function print1(){
//     console.log('Printer 2');
// }
// print1();

// //Printer2
// //Printer1
// //Printer1


// var print;
//  print = function(){
//     console.log('Printer 2');
// }
// print();
// print = function(){
//     console.log('Printer 1');
// }
// print();
// print();  
// //P2
// //P1
// //P1



// async function makeIcecream(){

// /* Code that takes a long time to finish*/
// for(let i=0;i<99;i++){}

// return 'iceCream';

// }

// async function makeMeal(){

// const desert = await makeIcecream();
// console.log(desert);//return icecream

// const desert2 = await await makeIcecream();
// console.log(desert2);//return icecream no effect of double await 


// const desert1 = makeIcecream();
// console.log(desert1);//return promise as no await was there

// }
// makeMeal();





// console.log('First')

// setTimeout(function () {
//   console.log('Second')
// }, 0)

// new Promise(function (res) {
//   res('Third')
// }).then(console.log)

// console.log('Fourth')


//First 
//Fourth
//Third
//Second



// https://javascript.plainenglish.io/6-interview-questions-that-combine-promise-and-settimeout-34c430fc297e





const firstName='Sundar';
const lastName='Pichai';
const person = {
  firstName: "Satya",
  lastName: "Nadella",
  getFirstName : function() {
        var firstName='Parag'
        const lastName='Agarwal'
    return this.firstName;
  },
    getLastName : ()=> {
    const firstName='Parag'
        const lastName='Agarwal'
    return this.lastName;
  }
};

const person2 = {
  firstName: "Shantanu",
  lastName: "Narayen",
};
person2.getFirstName = person.getFirstName;
console.log(person.getFirstName())//Satya as this will refer to obj Person
console.log(person.getLastName())// undefined as this 
console.log(person2.getFirstName())//Shantanu




// var obj = { // does not create a new scope
//   i: 10,
//   b: () => console.log(this.i, this),
//   c: function() {
//     console.log(this.i, this);
//   }
// }
// obj.b(); // prints undefined, Window {...} (or the global object)
// obj.c();//  prints 10, {i: 10, b: ƒ, c: ƒ}


// var obj = {
//   a: 10
// };

// Object.defineProperty(obj, 'b', {
//   get: () => {
//     console.log(this.a, typeof this.a, this); // undefined 'undefined' Window {...} (or the global object)
//     return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
//   }
// });