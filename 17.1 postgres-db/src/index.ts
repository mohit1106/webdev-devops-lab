// connecting client to postgres database using pg to neon.tech
import dotenv from "dotenv";
dotenv.config();

import {Client} from "pg";
const pgClient = new Client(process.env.PG_CONNECTION_STRING)

async function main() {
    await pgClient.connect();
    console.log("✅ Connected to PostgreSQL");

    const response = await pgClient.query("UPDATE users SET username='mohit10' WHERE id=2;");
    console.log("📦 Query Result:", response.rows);

}

main();   









// seeing how sql injection works in application's databases
import express from "express";
const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try {
        // it'll be vulnerable to sql injection
        // const insertQuery = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;
        // console.log(insertQuery);
        // const response = await pgClient.query(insertQuery);


        // to prevent sql injection do this
        const insertQuery2 = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`
        const response = await pgClient.query(insertQuery2, [username, email, password]);

        res.json({
            message: "You have signed up"
        })
    }
    catch(e) {
        // Error handling code should go here
    }
});
