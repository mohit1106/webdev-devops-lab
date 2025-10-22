const { Router } = require("express");
const { userModel, purchaseModel, courseModel } = require("../db");
const userRouter = Router();

const jwt = require("jsonwebtoken");
const  { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");

userRouter.post("/signup", async function(req, res) {
    // TODO - use zod for input validation and bcrypt for passwd hashing
    const email = req.body.email; 
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    // TODO - use try catch block 
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    res.json({
        message: "user signup succeeded"
    })
})



userRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    // TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const user = await userModel.findOne({
        email: email,
        password: password
    }); 
    if (user) {
        const token = jwt.sign({
            id: user._id,
        }, JWT_USER_PASSWORD);

        // Do cookie logic

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "user signin Incorrect credentials"
        })
    }
})


// get all the purchased courses of the user
userRouter.get("/purchases", userMiddleware, async function(req, res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    })

    let purchasedCourseIds = [];
    for (let i = 0; i<purchases.length;i++){ 
        purchasedCourseIds.push(purchases[i].courseId)
    }

    const coursesData = await courseModel.find({
        _id: { $in: purchasedCourseIds }
    })

    res.json({
        purchases,
        coursesData
    })
})

module.exports = {
    userRouter: userRouter
}