let arr = [3,4,2,1];
area = (radius) => {
    return Math.PI*radius*radius;

}
calculate = (arr, logic) => {
    let output = [];
    for(let i = 0; i<arr.length;i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calculate(arr,area));

// We can remodify it as map function arr.map(logic);

Array.prototype.calculate = function (logic){
    let output = [];
    console.log(this[0]);
    for(let i = 0; i<this.length;i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(arr.calculate(area));