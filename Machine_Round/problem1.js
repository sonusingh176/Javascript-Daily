const obj={
    key1:"apple",
    key2:"banana",
    key3:"cherry",
    key4:"date",
    
};
const Inputstr ="I have a banana and date ";
// output we want : ["banana","date"];

// Aapke paas ek object hai, aur ek input string. Aapko chahiye:
// Woh saare values (like "banana", "date") jo input string me present hain.

// !logic
/**
 * * 1.) agar hum "Inputstr" ko array me convert kr de to comperision easy ho jayega.
 * * |- JavaScript me string ko array me convert karne ke kai tarike hote hain — depending on kis format me array chahiye (words, characters, custom logic, etc.).
 *
 * ✅ 1. Using split() method : Break in Words
 *      const str = "Hello World";
        const arr = str.split(" ");   //give space, so string me jaha jaha space milega ,unsab ko array me rakhe ga.
        console.log(arr); // ["Hello", "World"]
 *
        🔹 Characters me todna:
 *      const arr = str.split("");        //give no space, so string ke sabhi character and space ko array me rakhe ga.
        console.log(arr); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
 *
 *      !syntax
 *      *string.split(separator, limit)
 */
 
const inputWords = Inputstr.trim().split(" "); // ["I", "have", "a", "banana", "and", "date"]
// console.log(inputWords)

const result=[];

for(let key in obj){
    const value = obj[key];

    for(let words of inputWords){
        if(words === value){
            result.push(value);
        }
    }
}
// console.log(result)

/**
 *  !logic 2
 * 
 *  Object.values() method returns an array of the property values of an object.
 *  use filter() method
 *  use includes() method   => Check if a string includes specified string/word .    syntax:  string.includes(searchvalue, start)
 */

// const result2 = Object.values(obj).filter((elem, indx) => {
//     return Inputstr.includes(elem); // ✅ explicitly return karna hoga
// });

// OR

const result2 = Object.values(obj).filter(value => Inputstr.includes(value));

console.log(result2)

/**
 * !logic 3
 */

const result3 = [];

const values = Object.values(obj);

for (let i = 0; i < values.length; i++) {
  if (input.includes(values[i])) {
    result3.push(values[i]);
  }
}

console.log(result3);  // ["banana", "date"]