require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin")

app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000); // only starts if database is up
    console.log("listening on port 3000")
}
main();
