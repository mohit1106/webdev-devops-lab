import express from "express";
const app = express();

let requestCount = 0;
/*
function loggerMiddleware(req, res, next){
    console.log("method is: " + req.method);
    console.log("host is: " + req.hostname);
    console.log("route is: " + req.url);
    console.log(new Date());

    next(); // calls next function
}
app.use(loggerMiddleware);
*/


function requestIncreaser(req, res, next) {
    requestCount = requestCount + 1;
    req.name = "randomharkirat123";
    console.log("Total number of requests = " + requestCount);
    next();
}

function realSumHandler(req, res) {
    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(req.name);

    res.json({
        ans: a + b
    });
}

// Better routing, add database, middlewares
app.get("/sum", requestIncreaser, realSumHandler);



// bulit in bodyparser middleware used by express
app.use(express.json());
app.post("/sum", function(req, res){
    console.log(req.body);
    const a = parseInt(req.body.a); 
    const b = parseInt(req.body.b);
    res.json({
        ans: a+b,
    })
})
app.listen(3000);