const express = require("express");
const jwt = require("jsonwebtoken");
const { auth, JWT_SECRET } = require("./auth");

const bcrypt = require("bcrypt");
const { z } = require("zod");

const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://@cluster0.shqa5hl.mongodb.nett");

const app = express();
const PORT = 3000;

app.use(express.json());



app.post("/signup", async function(req, res) {
    const requiredBody = z.object({
        email: z.email().min(3).max(100),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(100)
    })
    // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    if(!parsedDataWithSuccess.success){
        res.json({
            message: "incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errorThrown = false;
    try {
        const hasedPassword = await bcrypt.hash(password, 10);
        console.log(hasedPassword);

        await UserModel.create({
            email: email,
            password: hasedPassword,
            name: name
        });

    } catch(e) {
        res.status(500).json({
            message: "Error while signing up, user already exists!"            
        })
        errorThrown = true;
    }
    
    if(!errorThrown){
        res.json({
            message: "You are signed up"
        })
    }
});



app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        // password: password,
    });

    if(!user){
        res.status(403).json({
            message: "user doesnt exist in my db"
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    console.log(user);
    if (user && passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title,
        done,
        userId
    });
    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });
    res.json({
        todos
    })
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});