//to create the server
const express = require("express");

const app = express();

app.get("/");

const port = 8080;
app.listen(port, () => {
  console.log(`A Node Js API is listening on port: ${port}`);
});
