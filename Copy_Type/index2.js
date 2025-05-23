//✅ "In JavaScript, copying depends on whether the value is a primitive or a reference type."

/**
 * 1. 🧠 Copying Primitive Types :
      Primitive types like string, number, boolean, null, undefined, symbol, and bigint are copied by value.
 * 
 */

      let a = 10;
      let b = a; // b is a copy of a

      console.log(b) //10
          b=20
      console.log(a) //10
      console.log(b) //20


    //   ---------------------------------------------------------------------------------
    
/**
 *  📦 Copying Reference Types (Objects/Arrays)
     These are copied by reference, not value. So changing one affects the other.
 */

     let obj1={name:"sonu"}
     let obj2 =obj1;
     console.log(obj2) //sonu
     
     obj2.name='singh'
     console.log(obj1); //singh 


/**
 *  🧩 Shallow Copy
 * 
 * Shallow copy only copies top-level properties.
 */
let obj3 = {
    name: "Sonu",
    age: 25,
    address: {
      city: "Patna",
      state: "Bihar",
      location: {
        lat: 25.6,
        long: 85.1
      }
    }
  };
  
  let obj4 = { ...obj3 }; // Shallow copy

  console.log(obj4,"obj4");
  
  //Change in Top-level Property
  obj4.name="amit"

  // Change nested property
  obj4.address.location.city = "Siwan"; // Adding city to location
  obj4.address.city = "Siwan"; // Change address.city
  
  console.log("Original Object (obj3):", obj3);
  console.log("Copied Object   (obj4):", obj4);
  
/**
 * Agar aap shallow copy banate ho (like ...obj3), aur top-level properties ko change karte ho,
 * to original object (obj3) me koi farak nahi padega — dono alag ho jaate hain top-level par.
 * kyu ki top level properties copy by value pr work krti hai or agar nested property me change kro ge to sabhi jageh (obj3 or obj4) me change hoga kyu ki yy "reference copy " hota hai.
 * 
 */