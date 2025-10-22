import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());
// app.use(cors({
//     domains: ["domain 1", "domain 2"]
// }));

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});


app.listen(3000);


//  cors used to send req from frontend to backend, when both 
// both frontend and backend are hosted on hifferent domain, like here, 
// run nodemon index.js  -> port 3000
// then npx serve in public folder so fronted gets its own domain on some port
// now when we click button on frontend, we'll get cors error.

//  to fix this and make it so we can make req from trusted domains to our backend, we use cors middleware.
// 