let person = {
    name: "Taran",
    _id: 1  //WE WANT TO MAKE THIS PROP ONLY READABLE
};
// person.id = 5;
// console.log(person.id);


// So for that we use defineProperty
// Object.defineProperties(person, {
//     "id":{value:1, writable:false}
// });

//2nd way
// Object.defineProperty(person, "id", {
//     value:1,writable:false
// });

Object.defineProperty(person, "id", {
    get: function() {
        return this._id;
    },
    set: function(id) {
        this._id = id;
    }
});

person.id = 5;
console.log(person.id);

