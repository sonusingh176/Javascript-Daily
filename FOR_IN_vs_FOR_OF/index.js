/**
 * what is the difference between for in and for loop  ?
 * 
 * 
 * ! both for-in and for-of are used to iterate over elements in javascript.
 * 
 * ? for in:  Iterates over the keys (property names) of an object or an array.
 * 
 * ? for of : Iterates over the values of an iterable(eg arrays,string,Sets,maps)
 */

const user = { name: "Sonu", age: 25 };

for (let key in user) {
  console.log(key, user[key]);  // name Sonu, age 25
}


// ===================================

const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);  // ✅ Output: 10, 20, 30
}

// ==================================

for (let char of "SONU") {
    console.log(char); // S O N U
  }
  
//   =================================
// ! ❌ for...of on Object (directly) — Error:
const obj = { a: 1, b: 2 };

for (let val of obj) {
  console.log(val);  // ❌ Error: obj is not iterable
}

//Objects are not iterable by default. using for of loop.