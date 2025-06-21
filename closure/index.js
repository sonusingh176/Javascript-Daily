/**
 *  ! Closure kya hota hai?
 * Jab koi function apne parent function ke variables ko remember karta hai,
 * even after parent function execution complete ho chuka ho — usse closure kehte hain.
 * 
 *  ? Closures are created when a function is defined inside another function, and the inner function has 
 *  ? access to the variables of the outer function's even after the parent function has finished executing or returned.
 * 
 * 
 */

function outer(){
    let count =0;

    return function inner(){
        count++;
        console.log(count);
    };
}

const fn = outer();
fn();
fn();
fn();

/**
 * ✅ Where do we use closures?
 * 
 * | Use Case                 | Description                                  |
| ------------------------ | -------------------------------------------- |
| ✅ **Data hiding**        | Keep variables private inside functions      |
| ✅ **Encapsulation**      | Return functions that manage internal state  |
| ✅ **Callback functions** | Like in `setTimeout`, `eventListeners`, etc. |
| ✅ **Factory functions**  | Create multiple instances with private data  |

 */

// ✅ Example: Callback with Closure

function outer() {
    let msg = "Welcome, Sonu!";
  
    setTimeout(function callback() {
      console.log(msg); // 👈 closure in action
    }, 2000);
  }
  
  outer(); // Call outer
  /**
   * 🔍 Breakdown:
    callback() function ko setTimeout ke through baad me execute kiya ja raha hai
    Lekin uske andar msg use ho raha hai, jo outer() function me tha
    Jab tak callback() execute hota hai, outer() to complete ho chuka hota hai
    Still, callback() remembers msg — ✅ That is Closure
*/

// ✅ Example: Closure via IIFE

const counter =(function(){
    let count =0;

    return function(){
        count++;
        console.log(count);
    }
})();

counter(); // 1
counter(); // 2
