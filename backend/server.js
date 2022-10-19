const app= require('express')();
const server= require('http').createServer(app);
const io=require('socket.io')(server,{
    cors: {
        origin: "*",
      }
});

io.on('connection',(socket)=>{
    console.log("Content of the socket",socket);
    console.log("Socket connection is formed...");

    socket.on("chat",(payload)=>{
        console.log("Content of payload : ",payload);
        io.emit("chat",payload);
    });

});

server.listen(5000,()=>{
    console.log("Server is listening to port 5000...");
})