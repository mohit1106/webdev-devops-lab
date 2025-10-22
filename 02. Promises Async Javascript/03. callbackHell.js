/*
Write code that
logs hi after 1 second
logs hello 4 seconds after step 1
logs hello there 5 seconds after step 2
*/


// to avoid callback hell
function setTimeoutPromisified(duration){
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}
// promise chaining
setTimeoutPromisified(1000).then(function(){
    console.log("hi after 1 sec");
    return setTimeoutPromisified(4000)
}).then(function (){
    console.log("hello after 1 + 4 sec");
    return setTimeoutPromisified(5000)
}).then(function (){
    console.log("heloo there after 1 + 4 + 5 sec");
});

console.log("outside the callback hell");