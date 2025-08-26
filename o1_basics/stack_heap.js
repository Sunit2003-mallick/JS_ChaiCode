// stack (primitive) , heap (non-primitive)

// stack
let myName = "sunit"

hisName = myName
console.log(hisName);  // sunit

hisName = "mahi"
console.log(myName);  // sunit
console.log(hisName);  // mahi

// heap
let user1 = {
    email: "user1@gmail.com",
    upi: "user1@ybl"
}

let user2 = user1

user2.email = "sunit@gm.com"

console.log(user1.email);  // sunit@gm.com
console.log(user2.email);  // sunit@gm.com