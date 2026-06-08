//TCS -2026

//Implement a simple promise based delay function ?

//ans - A simple promise based delay function in js can be implemented using setTimeout and Promise.

function delay(ms){
    return new Promise((resolve,reject)=>{
        if(ms<0){
            reject("Time can not be negative");
            return;
        }

        setTimeout(()=>{
            resolve(`Completed after ${ms} ms`);
        },ms)
    });
}

console.log("start")

delay(1000).then((message)=>{
console.log(message);
}).catch((error)=>{
    console.log(error);
});


console.log("End")