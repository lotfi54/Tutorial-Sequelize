const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");


app.get('/', (req,res) => {
    res.send('index')
})



const PORT = process.env.PORT || 5050;


app.listen(PORT, () =>
  console.log("Started on port " + `Server is running ${PORT}`)
);