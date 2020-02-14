const server = require("./server");

// const port = process.env.PORT || 5600;
const port = 5600;

server.listen(port, () => {
    console.log(`server is running on localhost:${port}`)
})