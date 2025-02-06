const accountId = 14423
let accountEmail = "er.amang@gmail.com"
var acountPassword = "12345"
accountCity = "Delhi"

//accountId = 2  //not allowed

accountEmail = "aman.er@gmail.com"
accountPassword = "123321"
accountCity = "Gorakhpur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, acountPassword, accountCity])
