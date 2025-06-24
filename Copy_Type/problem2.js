const person ={
    firstname:'john',
    lastname:'doe',
    address:{
        city:'patna',
        state:'bihar'
    }
};

let p1= JSON.parse(JSON.stringify(person));
// console.log(p1);


p1.address.city='bodhgya'

console.log(person)
console.log(p1)
 




