<!-- 
? As we know : Javascript is a synchronous and single-threaded language. But due to callback we can do asynchronous things in javascript.

! what is callback function ?

A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. 

 A function that receives a callback function as its argument is called Higher Order Function.

!In which scenario are callback functions most commonly used?
ans -  Asynchronous programming (e.g. setTimeout, API calls)

! How to write correct syntax of a callback function?

We have different scenario and jaise scenario hota hai, waise call back write krte hai. hum kuch example write kr rahe hai niche.

TODO 1.) Basic Callback Execution

        function greet(cb){
        cb()
        }

        function sayBye(){
            console.log("Bye!");
        }
        greet(sayBye); 

TODO 2.) setTimeout with Callback

function fetchData(cb){
    setTimeout(()=>{
        console.log("Data fetched!");
        cb () 
    },5000)
}

function processData(){
    console.log("processing data ...")
}

fetchData(processData)

output : (After 1 second)
        Data fetched!
        Processing data...

! OR
Humare pass koi function hai show() , or hum chate hai ki ye function show(), 1 sec ke baad run ho to aise case me  hame setTimeout() ka use krna hota hai. 

or chuki setTimeout apne parameter me ek function leta hai(yahi jo pass hua ,wo ek  callback function ho gya. bcoz setTimeout bhi ek function hi hai)


Hum niche code me dekh sakte hai , ki kinte ways se hum setTimeout KE andar callback function write kr sakte hai.

 function show(){
    console.log("I am inside show");
 }

! 1 way.
* setTimeout(function(){
*    show();
* },1000)
-------------------
! 2 way.
* setTimeout(show,1000)

! 3 way.
 yaha show function ko setTimeout ke andar hi define kr diya gya hai.

* setTimeout(function show(){
*    console.log("I am inside show")
* },1000)

! 4 way.
* setTimeout(()=>{
*    show();
* },1000)


 -->

 