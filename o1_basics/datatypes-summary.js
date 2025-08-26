// REMIND THESE NOTES :- 

 let Name = "sunit"
 console.log(typeof Name); // string

 let score = 4
 console.log(typeof score); // number

 let isLoggedIn = true
 console.log(typeof isLoggedIn); // boolean
 
 const outsideTemp = null
 console.log(typeof outsideTemp); // object

 let userEmail;
 console.log(typeof userEmail); // undefined

 const id1 = Symbol('123')
 console.log(typeof id1); // symbol

 const bigNumber = 485865943n
 console.log(typeof bigNumber); // bigint



 const heros = ["shaktiman", "doga"]
 console.log(typeof heros) // object

 let obj1 = { name: "sunit", age: 22 }
 console.log(typeof obj1) // object

 const myFunction = function() { 
            console.log("Hello World!");
        } 
console.log(typeof myFunction); // object, function




/* on the basis of how to store data and how to 
access data there is two datatypes . 

  1 - Primitive (call by value) - 7 types
    -> String, Number, Boolean, null, undefined,
        symbol, bigInt 

        ex:-
            let name = "sunit"

            let score = 4

            let isLoggedIn = true

            const outsideTemp = null

            let userEmail;

            const id1 = Symbol('123')
            const id2 = Symbol('123')
            console.log(id1 === id2);
            output : false

            const bigNumber = 485865943n
            console.log(typeof bigNumber);
            output : bigint
               
  2 - Non Primitive / Reference  
    -> array, objects, functions
    
        ex:-
            const heros = ["shaktiman", "doga"]
            
            let obj1 = {
                name: "sunit"
                age: 22
            }
                
            const myFunction = function() {
                console.log("Hello World!");
            } 
*/ 

// Note:-
// typeof non-primitive datatype is "object".

// ex:-

        // const heros = ["shaktiman", "doga"]
        // console.log(typeof heros)
        // output : object





