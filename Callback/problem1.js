setTimeout(()=>{
    console.log("timer")
},5000)

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});


/**
 * As we all know , Javascript is a synchronous and single-threaded language. that Means
 * the code will executed line by line. 
 * 
 * so jab ye upar ka code run hoga setTimeout() register hoga and setTimeout callback function ko lega or ek seprate space 
 * me store kr dega. and ek timer attach kr dega 5second ka. or hume pata hai ki javascript 5second ke liye setTimeout ke pass nhi
 * rukega.
 * 
 * javascript next line ko execute krne jayega, jaha usko function x() milega .ye x() function me y function as a callback 
 * pass hua hai. ye pura function x() as it is store rahega, jab tk function x ka invocation naa mile.
 * 
 * now jab javascript next line me jata hai to usko x() call/invokation milta hai. now jo function x() store tha wo apna execution
 * start kr dega. chuki function x() me function y() ko pass kiya gya hai. jiska invocation function x() ke andar hai. 
 * so  
    * function x(y){
        console.log("x");
        y();
    }
 * sabse jab ye x() execute hona suru hoga ,sabse pahle console.log("x") run hoga. phir Y() ka invocation hoga, jsike chate y() function run hoga or console.log("y") milega.
 * Or sabse last me settimeout ke andar ka callback run hoga or console.log("timer") print hoga.

 * 
 
 * 
 */



/**
 * 
 * ✅ Execution Flow with JS Terms
📌 Step 1: Global Execution Context (GEC) Creation
Jab program start hota hai, sabse pehle JavaScript engine Global Execution Context banata hai.

GEC me Do phases hote hain:

 1. Memory Creation Phase (Creation Phase):

        setTimeout → reference milta hai (browser/web API ke through).
        x → function definition memory me store hoti hai.

 2. Code Execution Phase:
        Line by line code execute hota hai.(Call Stack Begins)


📌 Step 2: setTimeout() Call

    ✅Jab setTimeout() execute hota hai:
        setTimeout ka callback (arrow function) ko Web APIs environment me bhej diya jata hai.
        Waha timer (5000ms) start ho jata hai.
        Callback is scheduled to move to Callback Queue after 5 seconds.
        Main thread (Call Stack) free hota hi turant next lines execute karta hai.

⚠️ This function is asynchronous, so it does not block the main thread.
⚠️ Important: setTimeout is asynchronous, toh uska callback turant execute nahi hota.

📌 Step 3: Function x() Execution
Ab function x() ko call kiya gaya with a callback function y().

JavaScript x ke liye ek new Execution Context banata hai and usko Call Stack me push karta hai.

Inside x, sabse pehle console.log("x") execute hota hai → Output: "x"

y() is called → creates another Execution Context:

Fir x() ke andar passed function y() ko call kiya jata hai → Output: "y"

📌 Step 4: Function Execution Ends
x() aur y() dono execute hone ke baad unka Execution Context Call Stack se pop ho jata hai.

Ab Call Stack khali hota hai.

📌 Step 5: Timer Expires after 5 Seconds
5 seconds ke baad setTimeout ka callback Web API se Callback Queue me chala jata hai.

📌 Step 6: Event Loop
Event Loop dekhta hai ki Call Stack empty hai ya nahi.

Jaise hi Call Stack empty hota hai, Event Loop callback queue se function uthake Call Stack me daal deta hai.

Ab console.log("timer") execute hota hai → Output: "timer"

✅ Final Output:
x
y
(timer after 5 seconds)
timer

🔁 Summary in One Line:
JavaScript runs synchronously using Execution Context + Call Stack, and handles asynchronous tasks (like setTimeout) using Web APIs + Callback Queue + Event Loop.


 * 
 * 
 */