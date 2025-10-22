import expres from "express";
import jwt from "jsonwebtoken";
const app = expres();

app.use(expres.json());
const JWT_SECRET = "yohohoho"
const users = [];

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
        const token = jwt.sign({  // generating token
            username: username
        }, JWT_SECRET);

        // user.token = token          no need to store token in DB
        res.header("jwt", token); // sending jwt in response header
        res.json({
            message: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
})

app.get("/me", function(req, res) {
    const token = req.headers.token // jwt
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    const username = decodedInfo.username;


    let correctUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {   // check only username
            correctUser = users[i];
        }
    }

    if(correctUser){
        res.json({
            username : correctUser.username,
            password: correctUser.password
        })
    } else{
        res.json({
            message: "token invalid"
        })
    }
})

app.listen(3000);