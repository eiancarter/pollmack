const express = require("express");
const cors = require("cors");
const server = express();

const candidateRouter = require("./data/helpers/candidateRouter");
const contributionRouter = require("./data/helpers/contributionRouter");

server.use(express.json());
server.use(cors());


server.use("/api/candidates", candidateRouter);
server.use("/api/contributions", contributionRouter);

server.get("/", (req, res) => {
    res.send(`<h2>Welcome to Pollmack!</h2>`);
})


module.exports = server;

//logger middleware here if necessary