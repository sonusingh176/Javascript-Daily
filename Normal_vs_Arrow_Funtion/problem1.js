
const arrowFunc = () => {
  console.log(arguments); // ❌ ReferenceError
};

arrowFunc(1, 2, 3);
/**
 * Yahan koi normal parent function nahi hai jahan se arguments mil sake.
 * So arrow function ke andar arguments undefined ya ReferenceError deta hai.
 */




// ---------------------------------------------------

// function outerFunc() {
//     const arrow = () => {
//       console.log(arguments); // ✅ works fine — inherited from outerFunc
//     };
//     arrow(10, 20);
//   }
  
//   outerFunc(1, 2, 3); // Output: [1, 2, 3]
  