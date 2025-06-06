/**
 * ! jab Normal function to pata nhi ho ki kitne argument aane wale hai . or hume argument ko collect kra ho tab
 * ? 'arguments' keyword ka use krte hai.
 * 
 * ! or jab Arrow function to pata nhi ho ki kitne argument aane wale hai . or hume argument ko collect kra ho tab
 * ? '...' rest operator ka use krte hai.
 */

/**
 * 🔥 Rest vs Arguments
  
| Feature                 | `arguments` object | `...rest` parameter      |
| ----------------------- | ------------------ | ------------------------ |
| Type                    | Array-like         | Real array ✅             |
| Works in arrow?         | ❌ No               | ✅ Yes                    |
| Flexibility             | Limited            | More modern & readable ✅ |
| Supports array methods? | ❌ No (directly)    | ✅ Yes                    |
 

✅ Rest Parameters kyu use karte hain?
🔸 Jab function me multiple dynamic arguments aate hain
🔸 Jab hume un arguments pe map/filter/reduce lagana ho
🔸 Jab modern & clean code likhna ho
🔸 Jab arrow function use kar rahe ho (jisme arguments nhi hota)
 
*/


function sum(){
    console.log(arguments)
} 

sum(1,2,3,4)

// ================================

const arrowFunc1 = (...args) => {
    console.log(args);  // ✅ [1, 2, 3]
};

arrowFunc1(1, 2, 3);

