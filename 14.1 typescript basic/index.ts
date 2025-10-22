// npm init -y     npm install typescript     npx tsc --init    npx tsc -b

let x : number = 1;
console.log(x);


function greet(firstName: string|number) {
    console.log("Hello " + firstName);
}
greet("Monkey D Luffy"); 



function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(2, 3));


// Create a function that takes another function as input, and runs it after 1 second.
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}
delayedCall(function() {
    console.log("hi there");
})