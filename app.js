const express = require("express");
const path = require("path");
const app = express();
var mykaf = require("./producer");
var cors = require('cors')
app.use(cors())


var PORT = process.env.port || 3000;

// View Engine Setup
app.set("views", path.join(__dirname));
app.set("view engine", "ejs");

app.get("/:id", function (req, res) {
  var message = req.params["id"];
  
  
  res.send(message);
  //mykaf(message);

  console.log(message);
});

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});
