const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
