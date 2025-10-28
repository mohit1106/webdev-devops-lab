import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
    console.log(("connected"));

    // setInterval(() => {
    //     socket.send("hi there" + Math.random());
    // }, 1000)
    
    socket.on("message", (e) => {
        if(e.toString() === "ping"){
            socket.send("pong");
        }
    })
}) 