// console.log(2 > 1);
// console.log("2" > 1);
// output : true

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// output : false
// output : false
// output : true
/* the reason is that an equality check == and 
comparison >, <, >=, <= work differently.
 comparisons convert null to a number, treating 
 it as 0. that's why null >= 0 is true
                 and null > 0 is false. */


console.log("2" == 2);
console.log("2" === 2);
// output : true
// output : false
/* in === it check the both of datatypes if both
are same then it return true either false. */