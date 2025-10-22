const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

/*
Write a function that takes in a username and password and returns a JWT token
with the username encoded inside an object. Should return null if the username is
not a valid email or if the password is less than 6 characters. Try using the zod library here
*/
function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }
    const signature = jwt.sign({
        username
    }, jwtPassword)
    return signature;
}
// const ans = signJwt("gjhvjhvjh@gmail.com", "bvgcghhjggfhgv")
// console.log(ans)







/*
Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified).
Return false otherwise
*/
function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}
// console.log(decodeJwt("fhsbsfbsj"));   // incorrect jwt format -> false
// console.log(decodeJwt("any correct format jwt"));   // true





/*
Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED.
Return false otherwise
*/
// use try-catch: because verify() throws exception if token is not correct format
function verifyJwt(token) {
    let ans = true;
    try {
        jwt.verify(token, jwtPassword);
    } catch(e) {
        ans = false;
    }
    return ans;
}
// const ans = verifyJwt("asdasddsa");
// console.log(ans);  //false, because "asdasddsa" is not a correct format jwt