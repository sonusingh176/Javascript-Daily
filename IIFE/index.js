/**
 *    ! IIFE = Immediately Invoked Function Expression
 * 
 *    * Ek aisa function jo define hote hi turant execute ho jata hai — bina usse manually call kiye.
 *    * It is a JavaScript function that is executed immediately after it is defined.
 *    * IIFE stands for Immediately Invoked Function Expressions (IIFE).
 * 
 *    🧠 Why use IIFE?
 * 
 * 
 * 
 */

let message = "Hello World";

function showMessage() {
  let temp = "inside function";
  console.log(message);
}

console.log(temp); // ❌  temp is not defined

/**
 *  Agar temp accidentally global bana hota , to ye globally accessible ho jata. jiske chlte Global scope pollute ho jata.
 * !🔥 Chalo temp ko accidentally global banate hai: uske liye
 *  ? 1.) Case: Bina let, const, var ke likha:
 */

function showMessage() {
    temp = "inside function";  // ❗️no let/const/var
    console.log(message);
  }
  
  showMessage();
  console.log(temp); // ✅ "inside function"
  
/**
 * Kyunki tumne temp ko direct assign kiya without let/var/const
 * JavaScript usko global object (window) ka part bana deta hai 🧠
 * To console.log(temp) kaam karega, koi error nahi dega
 * 
 * ! But This is Bad Practice
 *   ? Isse global scope pollute hota hai
 *   ? Aur kabhi kabhi variables ka overlap/conflict ho jata hai
 *   ? Clean code me hamesha let, const, ya var likhna chahiye
 */
 
  


// =========================

// (function () {
//     let secret = "This is private";
//     console.log("Inside IIFE");
//   })();
//   console.log(secret); // ❌ Error: secret is not defined

//!🔷 Ab: IIFE ka closure se kya connection hai?
// TODO :  IIFE ka use closure create karne ke liye kiya jata hai.

const counter = (function () {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
})();

counter(); // 1
counter(); // 2
