function iter(values) {
    let nextIndex = 0;
    return {
        next:function() {
            if(nextIndex < values.length){

                return {value:values[nextIndex++],done:false};
            }else{
                return {value:"Undefined", done:true};
            }
        }
    }
}
const arr = ['A', "B","c","d"];
const a = iter(arr);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);