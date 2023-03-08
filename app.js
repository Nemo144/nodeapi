//to create the server
const express = require("express");
const app = express();

//importing routes for use
const postRoutes = require("routes/post");

app.get("/", postRoutes.getPosts);

const port = 8080;
app.listen(port, () => {
  console.log(`A Node Js API is listening on port: ${port}`);
});
