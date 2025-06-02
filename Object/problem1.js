/**
 * ! context loss
 * *JavaScript me context loss ek important concept hai, especially jab aap callback functions, event handlers, 
 * *ya async code (like setTimeout, Promises) me kaam karte ho.
 * 
 * 
 */

const obj = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  },
};

const result= obj.sum;
console.log(result());

