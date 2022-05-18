// let nam = {
//     firstname:"Taran",
//     lastname: "Singh",
//     printFullName: function(){
//         return this.firstname +" "+this.lastname
//     }
// }
// console.log(nam.printFullName());


// let name2 = {
//     firstname:"Taran1",
//     lastname: "Singh1",
// }
// // So if we want to use abv function for below obj this is call functin borrowing 
// console.log(nam.printFullName.call(name2));

// Normally we keep function outside from obj 
let nam = {
    firstname:"Taran",
    lastname: "Singh",
}
let printFullName =  function(hometown, state){
        return this.firstname +" "+this.lastname +" " + hometown+" "+ state;
    }
console.log(printFullName.call(nam, "Khalilabad", "UP"));


let name2 = {
    firstname:"Taran1",
    lastname: "Singh1",
}
// So if we want to use abv function for below obj this is call functin borrowing 
console.log(printFullName.call(name2,"Dehradun", "USA"));
console.log(printFullName.apply(name2,["Dehradun", "USA"]));

let printMyName = printFullName.bind(name2,"Khalilabad", "UP");
// It binds the function instead of calling nd we can call it later
console.log(printMyName());



"use strict";
var zipcode = {
    checkZipcode : function() {
        console.log(this);
        function updateZipCode() {
            console.log(this);
        }
        updateZipCode.call(this);
    }
}
zipcode.checkZipcode();