import { Server } from "socket.io";
import { createServer } from "http";

const server = createServer();

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5000", // Match EXACT origin (no slash!)
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("send-message",(message,room) =>{
    if(room === ""){
        socket.broadcast.emit("receive-message",message,room)  
    }else{
        socket.to(room).emit("receive-message",message,room)  
    }
})
socket.on("join-custom-room",(room,cb)=>{
    socket.join(room)
    cb(`Joined Custom Room ${room}`)
})
});

server.listen(3000, () => {
  console.log("Socket.io server running on http://localhost:3000");
});