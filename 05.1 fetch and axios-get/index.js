import express from "express";

const app = express();

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);    // localhost:3000/sum?a=4&b=5
    const b = parseInt(req.query.b);


    res.json({
        ans: a + b
    })
});

app.get("/add/:first/:sec", function (req, res) {   // dynamic endpoints
    const a = parseInt(req.params.first);    // localhost:3000/10/20
    const b = parseInt(req.params.sec);

    res.json({
        ans: a + b
    })
})







/////////////////////////////////////////////////////////////////////////////////////////////////
// hitting backend using fetch  (asynchronous and .then)
function main(){
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async response => {
        const json = await response.json();
        console.log(json.todos.length);
    })
}
main();

// hitting backend using fetch  (asynchronous but async await)
async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    
    const json = await response.json();
    console.log(json.todos.length);
}
main();

// hitting post using fetch 
async function main(){
    const response = await fetch("https://www.postb.in/1757039136185-7318460480310", {
        method: "POST",
    });
    
    const textData = await response.text();
    console.log(textData);
}
main();








////////////////////////////////////////////////////////////////////////////////////////////////
// hitting backend using axios
import axios from "axios";
async function main(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos.length);
}
main();

// hitting post using axios 
async function main(){
    const response = await axios.post("https://www.postb.in/1757039136185-7318460480310");
    console.log(response.data);
}
main();



app.listen(3000);