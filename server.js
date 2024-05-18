const { createServer } = require("http");
const next = require("next");
const { Server } = require("socket.io");

const { users } = require("./src/data/user.js");
const { chats } = require("./src/data/chat.js");
const { messages } = require("./src/data/message.js");

console.log(messages);

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    socket.emit(users);
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
