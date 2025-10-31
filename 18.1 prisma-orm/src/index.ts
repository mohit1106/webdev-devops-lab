import express from "express";

import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();



// express apllication
const app =express();
app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    })
})

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id as unknown as number;

    const user = await client.user.findFirst({
        where: {
            id: Number(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    });
    res.json({
        user
    })
})

app.listen(3000);



// prisma CLient
async function createUser() {
    // await client.user.create({
    //     data: {
    //         username: "mohit3",
    //         password: "1233",
    //         age: 21,
    //         city: "delhi"
    //     }
    // })

    const user = await client.user.findFirst({
        where: {
            id: 2
        },
        include: {
            todos: true
        }
    })
    console.log(user)
}

createUser();