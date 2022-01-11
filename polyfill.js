let nam = {
    fname:"Tarn",
    lname: "Singh"
}
let printName = function(){ 
    console.log(this);
    console.log(this.fname + " " + this.lname);
}

let PrintMyName   = printName.bind(nam);
PrintMyName();