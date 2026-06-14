//TCS -2026

//Implement a simple promise based delay function ?

//ans - A simple promise based delay function in js can be implemented using setTimeout and Promise.

console.log("start");

function delay(){
  return new Promise((resolve,reject)=>{
    

     setTimeout(()=>{
      resolve("promise resolved")
     },4000)
      // reject("promise reject")
  })
}

const pt=delay().then((message)=>{
  console.log(message);
}).catch((message)=>{
  console.log(message);
});


console.log("end");

// ===========================================================

//we can't write like this , because setTimeout not return promise

function delay(){
  return new Promise((resolve,reject)=>{
    

    //  setTimeout(()=>{
    //   resolve("promise resolved")
    //  },4000)
      // reject("promise reject")
  })
}

const pt1=setTimeout(delay,2000);
console.log(pt);