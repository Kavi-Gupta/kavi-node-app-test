const express = require('express');
const app = express();
app.use(express.json());
const { resolve } = require("path");

var port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    // Display checkout page
    const path = resolve("./index.html");
    res.sendFile(path);
  });

  app.get("/style.css", (req, res) => {
    // Display checkout page
    const path = resolve("./style.css");
    res.sendFile(path);
  });

app.listen(port, () => console.log(`Node server listening on port ${port}!`));