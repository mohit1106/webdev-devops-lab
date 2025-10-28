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

// websocket servers are only for real time communiction, http servers are for
// eventual communication. like in a messaging app, if p1 person is offline but when he comes
// online, he gets all the message because when he opens the app. he sends an http req to http server
// and http server gives him the previous messages, but simultaneously he also created websocket connection,
//  and now all the messages coming will use wss.