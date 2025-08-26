// let score = 33
// console.log(typeof score);   
// console.log(typeof (score));
/* output : number */

// let score = "33"
// console.log(typeof score);   
// console.log(typeof (score));
/* output : string */

// let score = "33"
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); 
// console.log(valueInNumber);
/* output : number */
/* output : NaN */ // not a number

// let score = null
// console.log(typeof score);  
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); 
// console.log(valueInNumber);  
/* output : object */
/* output : number */
/* output : 0 */

// let score = undefined
// console.log(typeof score);  
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); 
// console.log(valueInNumber);  
/* output : undefined */
/* output : number */
/* output : NaN */

// let score = true
// console.log(typeof score);  
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); 
// console.log(valueInNumber);  
/* output : boolean */
/* output : number */
/* output : true - 1 , false - 0 */

// let score = "sunit"
// console.log(typeof score);  
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); 
// console.log(valueInNumber);  
/* output : string */
/* output : number */
/* output : NaN */


/* NOTES */

// "33" => 33
// "33ab" => NaN
// true => 1 ; false => 0


// let isLoggedin = 1
// let booleanIsLoggedIn = Boolean(isLoggedin)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);
/* output : boolean */
/* output : true */

/* notes */
// 1 => true , 0 => false 
// "" => false
// " " => true
// "sunit" => true



// **************  OPERATIONS  ************* 

// let value = 3
// let ngValue = -value
// console.log(ngValue);
/* output : -3 */

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);


// let str1 = "Hello"
// let str2 = " World !"
// let str3 = str1 + str2
// console.log(str3);
// output : Hello World !


/* console.log(1 + 2);  // output : 3 
console.log("1" + 2);  // output : 12 
console.log(1 + "2");  // output : 12
console.log("1" + "2");  // output : 12 
console.log("1" + 2 + 2);  // output : 122 
console.log(1 + 2 + "2");  // output : 32 
console.log(+true);  // output : 1 */

let gameCounter = 100
++gameCounter
console.log(gameCounter);
// output : 101


// study from mdn website