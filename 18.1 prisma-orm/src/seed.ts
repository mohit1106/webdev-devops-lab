import { PrismaClient } from "@prisma/client"

const client = new PrismaClient();

async function createDummyUsers() {
    await client.user.create({
        data: {
            username: "trial",
            age: 21,
            password: "123123",
            city: "Delhi",
            todos: {
                create: {
                    description: "Go to city",
                    title: "Gym",
                    done: false
                }
            }
        }
    });
}

createDummyUsers();