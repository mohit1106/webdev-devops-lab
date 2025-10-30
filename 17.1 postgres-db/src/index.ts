import dotenv from "dotenv";
dotenv.config();

import {Client} from "pg";
const pgClient = new Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
})

async function main() {
    await pgClient.connect();
}