/**
 * ! what is default parameter
 * ? A default parameter in jsvascript allows you to assign a default value to a function parameter 
 * ? if no value is provided when the functtion is called
 */

//! ❌ Old JavaScript (before ES6) me aise handle karte the:

function greet(name) {
    name = name || "Guest";
    console.log("Hello", name);
  }
  
// ?  But ab ES6 me direct default parameter use karna best practice hai ✅


// !  📌 Example 1: Default parameter used
  function greet(name = "Sonu") {
    console.log("Hello", name);
  }
  
  greet();          // Output: Hello Sonu
  greet("Aman");    // Output: Hello Aman
  //Jab argument nahi diya (first call), tab name = "Sonu" default value use hui.

 // ! 📌 Example 2: Multiple default parameters

 function createUser(name = "Guest", age = 18) {
    console.log("Name:", name);
    console.log("Age:", age);
  }
  
  createUser();              // Name: Guest, Age: 18
  createUser("Ravi");        // Name: Ravi, Age: 18
  createUser("Neha", 25);    // Name: Neha, Age: 25
  