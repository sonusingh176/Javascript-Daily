//01-07-2025 interview me pucha.

let str="sonu";

//using basic logic
let res= "";
for(let i=str.length-1; i>=0 ; i--){
    res+=str[i]

}
console.log(res);

//using built in method 
let str1 ="sonu"
let result = str1.split("").reverse().join("")
console.log(result)