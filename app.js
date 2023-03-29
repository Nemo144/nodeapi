//to create the server
const express = require("express");
const app = express();

//importing the middleware npm
const morgan = require("morgan");

//importing routes for use
const { getPosts } = require("./routes/post");

//to create a sample of middleware
const myOwnMiddleware = (req, res, next) => {
  console.log("middleware applied");
  next();
};

//using the middleware
app.use(morgan("dev"));
app.use(myOwnMiddleware);

app.get("/", getPosts);

const port = 8080;
app.listen(port, () => {
  console.log(`A Node Js API is listening on port: ${port}`);
});
