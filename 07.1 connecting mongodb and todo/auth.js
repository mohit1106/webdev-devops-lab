const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret";

function auth(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        req.userId = decodedData.id; // modifying request
        next();
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}