function add(a, b) {
    return a+b;
}
let ans = add(4,5)
console.log(ans)



// asynchronouslyy reading a file
const fs = require("fs");
function print (err, data) {
    if (err) {
        console.log("file not found");
    } else{
        console.log(data);
    }
}
fs.readFile("a.txt", "utf-8", print);
console.log("done");  // printed earlier than readfile






// promisiffied version of      (asynchronous fxns)
// set timeout
// fetch
// fs.readfile


// promisified version of readFile
//const fs = require("fs");
function readTheFile(anotherFxn) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        anotherFxn(data);
    })
}
function promisifiedReadFile(fileName){
    return new Promise(readTheFile);
}

const p = promisifiedReadFile();
function callback(content){
    console.log(content);
}
p.then(callback);





// promisified timeout with custom time passing
function setTimeoutPromisified(time){
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    })
}

function callback() {
    console.log("time passed");
}

const p2 = setTimeoutPromisified(5000)
p2.then(callback);






// a promise expects a fxn that performs actual async task.
// once the async task is complete, call the argument of that fxn, passing in the data obtained from the async task.
// that data will then be passed to the fxn that you define in '.then'.
function promisFn(resolve){
    let c =0;
    for (let i = 0; i < 10000000; i++) {
        c++;
    }
    resolve("hi there mohit");
}

const p1 = new Promise(promisFn);

function callback(dataReceived){
    console.log(dataReceived);
}
p1.then(callback);










// final boss with errors and rejects

// promisified version of readFile
const fs = require("fs");
function readFileAsync(){
    return new Promise(function(resolve, reject) {
        fs.readFile("gyvygvg.txt", "utf-8", function(err, data) {
            if(err){
                reject("file not found")
            } else{
                resolve(data);
            }
        })
    })
}

readFileAsync()
    .then(function(x){
        console.log("file read successfully");
        console.log(x);
    })
    .catch(function(e){
        console.log(e);
    })
