const express = require("express");
const server = express();

const projectRouter = require("./data/helpers/projectRouter");
const actionRouter = require("./data/helpers/actionRouter");

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.get("/", (req, res) => {
    res.send(`<h2>Welcome to Pollmack!</h2>`);
})


module.exports = server;

//logger middleware here if necessary