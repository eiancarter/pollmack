const express = require("express");
const server = express();

const projectRouter = require("./data/helpers/candidateRouter");
const actionRouter = require("./data/helpers/contributionRouter");

server.use(express.json());
server.use("/api/candidates", candidateRouter);
server.use("/api/contributions", contributionRouter);

server.get("/", (req, res) => {
    res.send(`<h2>Welcome to Pollmack!</h2>`);
})


module.exports = server;

//logger middleware here if necessary