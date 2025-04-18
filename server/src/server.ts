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
});

server.listen(3000, () => {
  console.log("Socket.io server running on http://localhost:3000");
});