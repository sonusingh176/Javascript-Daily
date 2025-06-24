let x = 10;
 function foo() {
      x = 20;
      console.log(x); 
} 
foo(); 
console.log(x);  
















// output ? think.  and write description here how it works?

/**
 * jab ye program run hoga to ek global execution context create hoga. ye GEC ek big box jaise hota hai jisme 2 phase hote hai
 * 1)memory creation phase
 * 2)code execution phase
 * 
 * Memory creation phase me :
 * 
 * variable and function ko memory assign hoti hai global space me.
 * variable ko "undefined" assign kr diya jata hai. To humare code me let x =undefined assign ho jayega.
 * 
 * and function ke whole code ko global space me store kr liya jayega. To function foo() {...} ka
 * whole code as it is store ho jayega.
 * 
 * code execution phase me:
 * 
 * Javascript code ko line by line execute krega. or jab use variable ka value milega ,wo undefined ko replace kr dega value se.
 * 
 * Or jab ise function call milega (function invocation code) ,Tab ye Brand new execution context create krega Inside the GEC.
 * Now this Brand new execution context (function execution context) has the same memory allocation/creation phase and code execution phase. And all the same process occurs once, like variable allocate with Undefined and all function code  will store in the execution context memory.
 * 
 * Is Function Execution context ke andar jo variable "x" hai , jo javascript is x ka defination search krega ki kaha create kiya gya. pahle apne andar search krega ki kahi let x= something mil jaye. but isko apne andar to nhi mila tab ye apne(FEC) bahar yahi GEC me seacrh krega. or GEC me iske let x=10 milega. is pure process ko scope cahin bilte hai. 
 * Phir ye x ko 20 assign kr deta hai.  or x primitive data type hai. is liye ye "copied by value" ko follow krte hai. To isse x ko GEC me jo 10 vila tha wo ab 20 se replace jo jayega.
 * 
 * phir FEC me next line me console.log(x) milta hai . to ye screen pr 20 print kr dega. 
 * Now function ke andar ab kuch nhi hai run krne ko . Tab call Stack se Ye FEC ko bahar nikal dega. 
 * 
 * Now next line me phir console.log(x) mila , to ab kya hoga?  chuki hum jante hai ki FEC ke andar x ko 20 assign kr diya gya tha. jiske chalte GEC me bhi x ke pass 20 hi hai. 
 * so sonsole pr hume 20 hi milega.
 * 
 * 
 * output : 20 , 20 
 * 
 * 
 * 
 */

/**
 * 
 * 🔍 Step-by-Step Execution:
🧠 Global Execution Context (GEC) is Created
Every JavaScript program starts by creating the Global Execution Context, which has two phases:

1️⃣ Memory Creation Phase (Hoisting Phase)
All variables declared with var are hoisted and initialized with undefined.

let and const are hoisted but placed in the Temporal Dead Zone (TDZ) — not accessible until initialized.

Functions are hoisted entirely.

So:

x is declared with let, so it is hoisted but uninitialized in TDZ.

foo is a function declaration, so it is hoisted with its full definition.

2️⃣ Code Execution Phase
x = 10 is executed — so now x has the value 10 in global memory.

Then, we reach foo();, so a new Execution Context (FEC - Function Execution Context) is created for foo.

🧩 Inside Function Execution Context (FEC) of foo()
The foo() function does not declare its own x, so JavaScript looks for x in the outer scope (scope chain).

It finds x in the GEC with value 10.

The statement x = 20; modifies the same x in the global scope because there's no local x.

Then console.log(x); prints 20.

🖨️ After Function Execution
foo() finishes and its Execution Context is popped from the call stack.

Then console.log(x); runs in the GEC.

Since x was updated to 20 inside foo(), this also prints 20.

✅ Final Output:
Copy
Edit
20
20

 */