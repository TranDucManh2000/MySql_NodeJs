const express = require("express");
const router = require("./routers");
const cors = require("cors");
const app = express();
const port = 3001;

// socket
const { createServer } = require("http");
const { Server } = require("socket.io");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

router(app);

// add socket
const httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log(`API ${port}`);
});

const io = new Server(httpServer, {
  cors: {
    origin: "*", // http
    methods: "*", // methods
  },
});

let user = [];
const addUser = (userId, socketId) => {
  !user.some((user) => user.userId === userId) &&
    user.push({ userId, socketId });
};

const removerUser = (socketId) => {
  user = user.filter((user) => user.socketId !== socketId);
};

io.on("connect", (socket) => {
  // console.log("socket", socket.id);
  // addUser("mambh", socket.id);
  // console.log("user", user);
  io.emit("getuser", user);
  socket.on("chat message", (msg) => {
    io.to(`${user[0]?.socketId}`).emit("chat message", msg);
    // io.emit("chat message", msg);
    addUser(msg, socket.id);
    // io.emit("getuser", user);
  });
  socket.on("disconnect", () => {
    removerUser(socket.id);
  });
});
module.exports = io;
