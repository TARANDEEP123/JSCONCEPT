const arr = [
    {f:"q", l:"a", a:12},
    {f:"a", l:"a", a:10},
    {f:"z", l:"a", a:12}
];
let output = [];
output = arr.map((item) => {
    return item.f +" " + item.l;
});
console.log(output);

 output = arr.reduce(function(acc, curr) {
    if(acc[curr.a]) {
        acc[curr.a] += 1; 
    }else{
        acc[curr.a] = 1;
    }
    return acc;


}, {});
console.log(output);