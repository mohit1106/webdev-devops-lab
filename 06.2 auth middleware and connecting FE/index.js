const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

const JWT_SECRET = "yohohoho";
const users = [];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});



app.post("/signup", function (req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "you are signed up"
    })
    console.log(users);
})

app.post("/signin", function (req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u) {
        if (u.username == username && u.password == password) {
            return true; 
        } else {
            return false;
        }
    })

    if(user){
        const token = jwt.sign({  
            username: user.username
        }, JWT_SECRET);

        res.header("jwt", token); // sending jwt in response header
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
})

// auth middleware
function auth(req, res, next) {
    const token = req.headers["token"];
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData.username) {
        req.username = decodedData.username; // modifying req and passing the correct username to next function so other endpoints get access to it
        next();
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
}

app.get("/me", auth, function(req, res) {
    let correctUser = users.find(u => u.username === req.username);
    if (!correctUser) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json({
        username : correctUser.username,
        password: correctUser.password
    })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});