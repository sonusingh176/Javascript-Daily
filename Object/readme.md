<!-- 
! what is object and how many ways to create an object in javascript?
* An object in javascript is a collection of key-values pairs, where keys are string(properties) and values can be any data type. ( like it can be number ,string, boolean, obj, array etc.)

*(or) An object in JavaScript is a data structure / or datatype, used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

ok, ye "store related data collections" kya hai ?.

chalo isko samjte hai, lets suppose ek user hai jiske kuch property hai ,like name,age ,city,and some behaivour.  humare pass pahle se hi bhaut type ke datatype the inko store krne ke liye. 

like Primitive data type se:

let name = "Sonu";
let age = 25;
let city = "Indore";
➡️ Data scattered hai, related info ko ek saath handle karna difficult tha. 
But phir bhi hummare pass Array tha jo related data ko store kr sakta hai.

example le kiye: 

const users = [
  ["Sonu Kumar", 25, "sonu@example.com"],
  ["Ravi Singh", 28, "ravi@example.com"],
  ["Pooja Verma", 22, "pooja@example.com"]
];

?Access :
console.log(users[0][0]); // Sonu Kumar (name of 1st user)
console.log(users[1][2]); // ravi@example.com (email of 2nd user)

isme kya problem hai : array jo hai wo index based hota hai,jo ki Human-readable nahi ya bol sakte hai programmer friendly nhi hai. programmers ko index yaad rakhna padta hai, ki kon se index pr kya hai.

To ye ek problem hai ,jab humare pass ek bhaut bada related data ho. To Aise case me hume kuch aisa data structure ki need padti hai jo human/programmer readble ho,

! and then Picture me aata hai Object? 

TODO : ye human readable tha , Named properties ke form me structured data store karne ke sakta hai.Asaani se samajh aata hai ki kaun sa data kya represent kar raha hai

🎯 Conclusion:
Array se hum related values store kar sakte hain, lekin unka meaning clear nahi hota.Jab data ka structure important ho — jaise ek user, product, car, blog post — tab Object best choice hai.

➡️ Now, Lets see How object looks like and how to create objects?

let user = {
  name: "Sonu",
  age: 25,
  city: "Indore",
  greet() {
    console.log("Hello " + this.name);
  }
};


!📦 There are 4 ways to create object:
🔹Creating object with a constructor
🔹Using object literals
🔹Creating object with Object.create() method
🔹Using es6 classes

!✅ Creating object with a constructor
One of the easiest ways to instantiate an object is in JavaScript. 

Constructor is nothing but a function and with the help of a new keyword, the constructor function allows to creation of multiple objects of the same flavor as shown below: 

? constructor function   , first character should in UpperCase
function User(name, age) {
  this.name = name;
  this.age = age;
}

?New keyword to create an object
const user1 = new User("Sonu", 25);
const user2 = new User("rahul", 28);
const user3 = new User("raju", 35);

?Property accessors

console.log(user1.name);
console.log(user2.name);

!✅Using object literals
creating object using Object Literal is like (Sabse common & sabse easy).

The object literal syntax allows you to define and initialize an object with curly braces {}, setting properties as key-value pairs.

let person = {
    firstName: 'John',
    lastName: 'Doe'
};


TODO: Property accessor
console.log(person.firstName); //dot notation
console.log(person['firstName']); //bracket notation

?Used dot notation and bracket notation to access properties of the person object.

!✅Using es6 classes
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Sonu", 25);



!✅Creating object with Object.create() method
The Object.create() method creates a new object using the prototype of the given object.

Object.create(proto, propertiesObject)



-->