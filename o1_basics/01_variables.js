const accountId = 144553
let accountEmail = "sun@google.com"
var accountPassword = "1234"
accountCity = "BBSR"

//accountId = 2 // not allowed because of accountId is declare as constant


let accountState
accountEmail = "abab@gm.com"
accountPassword = "22"
accountCity = "Chennai"
console.log( accountId)
console.table([accountEmail,accountPassword, accountCity, accountState])

// not to use var because of issue in block scope and functional scope
        /* here scope means 
                     {
                           } */