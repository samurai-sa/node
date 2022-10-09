const port = 3000;
const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    res.send("<h1>Hello express.js</h1>");
  })
  .listen(port, () => {
    console.log(
      `The server has started and is listening on port number: ${port}`
    );
  });
