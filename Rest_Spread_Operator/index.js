/**
 * ! The JavaScript spread operator (...) expands an iterable (like an array) into  individual elements.
 * ? The spread operator is often used to extract only what's needed from an array.
 * 
 * 
 * ! 
 * * ? 
 * 
 * 
 */



// ==============================

// function sum(...args){ //rest operator
//     console.log(args);
// }
// sum(1,2,3,4)

// ============Spread Parameter======================
// const arr1=[1,2,3];

// function sum(args){ 
//     console.log(args);
// }

//  sum(...arr1);//spread operator sum(1,2,3)


// ============= Spread in Function Call ============================
// const marks = [90, 85, 95];

// function result(a, b, c) {
//     console.log(a, b, c);
// }

// result(...marks);


// ==========Rest with Multiple Parameters=================================

// function student(name, age, ...subjects) {
//     console.log(name);
//     console.log(age);
//     console.log(subjects);
// }

// student("Sonu", 24, "Math", "Science", "English");



// =============Spread + Rest Together================================
// const marks = [90, 85, 95];

// function result(name, ...scores) {//rest operator
//     console.log(name);
//     console.log(scores);
// }

// result("Sonu", ...marks); //spread operator.  result("sonu", 90,85,95)

// ================Spread in Array======================
// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const arr3 = [...arr1, ...arr2];  //[1,2,3,4]
// console.log(arr3);




//=================Copy Array==========================
// const arr = [1,2,3];

// const copy = [...arr];//spread operator

//================Object Examples=======================

//===============Copy Object OR  Spread with Object====================

// const user = {
//     name: "Sonu",
//     age: 24
// };

// const copy = {...user};//spread operator

// console.log(copy);

// =============Add New Property====================

const user = {
    name:"Sonu"
};

const newUser = {
    ...user,
    city:"Delhi" //input
};
console.log(newUser);

// {
// name:"sonu",
// city:"Delhi"
// }

// =============Update Property=========================

// const user = {
//     name:"Sonu",
//     age:24
// };

// const updatedUser = {
//     ...user,
//     age:25
// };


// ==================Merge Objects======================================

// const obj1 = {
//     a:1,
//     b:2
// };

// const obj2 = {
//     c:3,
//     d:4
// };

// const obj3 = {
//     ...obj1,
//     ...obj2
// };

//=========Same Property==============
// const obj1 = {
//     name:"Sonu",
//     age:24
// };

// const obj2 = {
//     age:30,
//     city:"Delhi"
// };

// const result = {
//     ...obj1,
//     ...obj2
// };

// console.log(result);
//=========Rest with Object Destructuring==============
// const user = {
//     name:"Sonu",
//     age:24,
//     city:"Delhi"
// };

// const { name, ...rest } = user;

// console.log(name);

// console.log(rest);

//=========Rest with Array Destructuring==============
const numbers = [10,20,30,40];

const [first,...rest] = numbers;

console.log(first);

console.log(rest);