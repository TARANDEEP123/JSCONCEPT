let p  = new Promise((resolve, reject) => {
    
    //resolve(true);
    reject(false);

});

p.then((result)=> {
    console.log(result);
}).catch((err)=>{
    console.log(err);
});