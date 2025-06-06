/**
 * 
 * !Advantages of Arrow Functions over Normal Functions
 * 
 * 
 * *so Basically arrow functions were introduced in ES6 (ECMAScript 2015).
 *  * 1.) Arrow functions are more concise syntex.
 *       ?EX:  const add = (a, b) => a + b;
 *  * 2.) Arrow functions are not hoisted
 *  * 3.) Arrow functions are Better for callbacks. and they are also   ideal for array methods like .map(), .filter(), .reduce().
 *  * 4.) Arrow function have Lexical this binding. means Arrow function: Inherits this from the surrounding (parent) scope.  and Normal function: Has its own this depending on how it is called.
 *  * 5.) Arrow functions don’t have their own arguments object; they use the one from the outer function.
 * 
 */

// ! lets understand the these points with code

// * POINT 2 : Arrow functions are not hoisted

//greet() ; // ❌ ReferenceError: Cannot access 'greet' before initialization

let greet =()=>{
    console.log("hello");
}


// * POINT 4 : Arrow function have Lexical this binding.

function Person(){
     this.age=25;
    
    setTimeout(()=>{
        console.log(this.age)  // ✅ 25 (arrow function uses parent's `this`) 
    },2000)
}
//Person();

// yaha setTimeout() ke andar jo  arrow function (jo callback ka kaam kr raha hai) hai
// uske andar  console.log(this.age); hai. yah "this" outside (lexical) se aa raha hai. 

function Person(){
    setTimeout(() => {
        this.age = 28;
        console.log(this.age);
    }, 2000);
}

//Person();

/**
 * function Person(){
        setTimeout(() => {
            this.age = 28;
            console.log(this.age);
        }, 2000);
    }
   Person();

 * *arrow function ke andar this.age = 28 likha hai, aur tu keh raha hai ki arrow function ka khud ka this nahi hota, toh phir ye this kaun sa hai?
 * *Chal simple Indian style me samjhte hain 👇 
 * 
 * TODO :   Arrow function ka this us function se aata hai jisme ye likha gaya hai. Matlab: arrow function khud ka this nahi banata, balki apne parent function se inherit karta hai.
 *
 * ? Above example me Kya ho raha hai usko samte hai.
 *   TODO 1.) Person() ko normally call kiya (without new), this refers to the global object (window in browsers or global in Node.js).
 *           ? | - "Jab Person() ko normally call karte hain (without new) — tab this global object kyu hota hai?"
 *           ? | - Chal isko Indian style me simple words me samajhte hain 👇
 *                    |
 *                    |ANS : 🔥 JavaScript me this ka matlab hota hai:
                            “Kaun bula raha hai function ko?” — jisse function call ho raha hai, this wahi hota hai.
 
        Jab tu normally function call karta hai (Person()), toh koi specific object us function ko own nahi kar raha.
        Toh JavaScript kehta hai —
        "Agar koi object nahi hai, toh main global object use kar lunga as default."

        
*     TODO : 2.) setTimeout() ke andar arrow function hai — ye apne parent Person() function ka this use karega.
*                     ? Toh jab arrow function me likha: this.age = 28,
*                     ? wo actually ban gaya: window.age = 28 (in browser).
        
*               ? To aise me  is age variavle ko hum function se bahar bhi use kr sakte hai. jo good practice nhi hai.
*               ! console.log("Outside:", window.age);  // prints 28
*
*      ! Parent ke andar ke kisi variable (like this.age) ko arrow function ke andar this se access kar paana — ye hi lexical this binding ka concept hai.
*
*
   */


// *  POINT 5.) Arrow functions don’t have their own arguments object; they use the one from the outer function.

// ❌ Example: Arrow Function with arguments

const arrowFunc = () => {
    console.log(arguments);
  };
  
  arrowFunc(1, 2, 3); // ❌ ReferenceError: arguments is not defined
  

 //* ✅ Solution: Use rest parameters instead
//! Arrow function me agar arguments chahiye ho, to use this:
const arrowFunc1 = (...args) => {
    console.log(args);  // ✅ [1, 2, 3]
};

arrowFunc1(1, 2, 3);

//✅  Example: Normal Function with arguments

function sum(){
    console.log(arguments)
} 

sum(1,2,3,4)

/**
 * ! jab Normal function to pata nhi ho ki kitne argument aane wale hai . or hume argument ko collect kra ho tab
 * ? 'arguments' keyword ka use krte hai.
 * 
 * ! or jab Arrow function to pata nhi ho ki kitne argument aane wale hai . or hume argument ko collect kra ho tab
 * ? '...' rest operator ka use krte hai.
 */