// function x(m) {
//     var a = m;
//     return (n) => {
//         console.log(a+n);
//     }

// }
// var a = x(10);
// a(30);
// class A{
//     constructor() {
//          var time = 1000;
//     }
//     x(m) {
//     var a = m;
//     function y(n) {
//         console.log(this);
//         console.log(a +  n + time);
//     }
//     return y;

// }

// }

// var a = new A();
// var b = a.x(10);
// console.log(b);
// b(30);




// module design patten
// currying
// function like once
// memoize
// maintaining status in async world
// setTimeouts
// Iterators



// function x() {
//     for(let i=1; i<5; i++){
//         setTimeout(function () {
//             console.log(i);
//         }, i*1000);
//     }
// }
// x();

// function x() {
//     for(let i=1; i<5; i++){ // it is block scope so it orint 1 to 4 after i*1000 ms
//         setTimeout(function () {
//             console.log(i);
//         }, i*1000);
//     }
// }
// x();


function showHelp(help) {
 console.log(help);
}

function makeHelpCallback(help) {
  return function() {
    console.log("ojo");
    showHelp(help);
  }
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
     test = makeHelpCallback(item.help);
     test();
  }
}

setupHelp();



function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}

var z = x();
console.log(z);
z();
