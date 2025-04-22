/**
 *   3 Ways to Copy Objects in JavaScript
 *     1.) Use the spread (...) syntax
 *     2.) Use the Object.assign() method
 *     3.) Use the JSON.stringify() and JSON.parse() methods
 * 
 * 
 */

const person ={
    firstname:'john',
    lastname:'doe'
};

//using spread

let p1 ={
    ...person
}
//console.log(p1)


// using  Object.assign() method
let p2 = Object.assign({},person)
//console.log(p2);

// using JSON
let p3 = JSON.parse(JSON.stringify(person))
 p3.lastname="sena"
// console.log(p3);
// console.log(person)

// Both spread (...) and Object.assign() perform a shallow copy while the JSON methods carry a deep copy.

/**
 * Shallow copy vs. deep copy
 * 
 * Shallow copy
 */

const original ={
    a:1,
    b:{ c:2}
}

//shallow copy
const shallow_copy={...original};
shallow_copy.b.c=5;
console.log(shallow_copy);
console.log(original)

//shallow copy, matlab dono original aur copy ek hi memory location ko point karte hain.


// Deep copy
const deep = JSON.parse(JSON.stringify(original));
deep.b.c = 10; // Does NOT affect original

/**
 * Deep copy mein, pura object including nested elements ka ek completely naya duplicate banaya jata hai — alag memory location me. 
 * Toh koi changes copy me karne se original object bilkul affect nahi hota.
 * 
 */