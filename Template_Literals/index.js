/**
 * ! what is template literals or back-ticks (``)?
 * 
 * * I use template literals in my project when I need to mix HTML with dynamic values. 
 * * I also use it to return HTML elements from a function by wrapping them inside template literals.
 * 
 * ?Template literals are a new feature that was introduced in ECMAScript6, 
 * ?which offers a simple method for performing string interpolation and multiline string creation.
 * 
 * todo : String interpolation ka matlab hota hai —
 * todo :string ke andar variables ya expressions ko directly insert karna using ${} syntax.
 */

let name = "Sonu";
let msg = `Hello, ${name}!`;  // 👈 string interpolation
console.log(msg);  // Output: Hello, Sonu!


// * 🧠 Without interpolation (old way):
let name1 = "Sonu";
let msg1 = "Hello, " + name1 + "!";
