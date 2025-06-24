// ✅ Example: Callback with Closure

function attachEventListner(){
    let count =0;
    document.getElementById("clickMe").addEventListener("click",function xyz() {
        console.log("Button Clicked",++count)
    })
}

attachEventListner();

/**
 *  Let me explain what’s happening step by step using JavaScript concepts like callback, closure, and lexical scope.
 * 
 * ✅ Concept Breakdown:
🔹 1. Callback Function
function xyz() is passed as a callback to addEventListener().

This callback will execute when the button is clicked.

🔹 2. Closure
The function xyz() is a closure because it captures and remembers the variable count, even after attachEventListner() has finished executing.

count is declared in the outer lexical environment of xyz().

🧠 Closure = function + its lexical environment (variables from parent scope).

🔹 3. Lexical Scope
Because xyz() is defined inside attachEventListner(), it has access to variables declared there, i.e., let count = 0.

✅ What Happens When You Click the Button?
Each time the button with id="clickMe" is clicked:

xyz() is executed.

count is incremented using ++count.

The updated value is logged.

✅ Output (on multiple clicks):

Button Clicked 1
Button Clicked 2
Button Clicked 3
...
 * 
 */