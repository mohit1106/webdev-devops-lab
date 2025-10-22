const { Router } = require("express");
const adminRouter = Router();

const { adminModel, courseModel } = require("../db");
const  { JWT_ADMIN_PASSWORD } = require("../config");
const jwt = require("jsonwebtoken");
const { adminMiddleware } = require("../middleware/admin");

const { z } = require("zod");

adminRouter.post("/signup", async function(req, res) {
    const requiredBody = z.object({
        email: z.email().min(3).max(100),
        password: z.string().min(3).max(100),
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100)
    })
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
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    res.json({
        message: "admin signup successfull"
    })
})


adminRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    });
    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        // Do cookie logic

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "admin signin Incorrect credentials"
        })
    }
})



// create course
adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;
    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})


// update course
adminRouter.put("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;
    const { title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })
    res.json({
        message: "Course updated",
        courseId: course._id
    })
})


// get all course of the particular admin who is signed in
adminRouter.get("/course/bulk", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId 
    });

    res.json({
        message: "heres all your courses",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}