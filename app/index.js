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

io.on("connect", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

module.exports = io;
