const express = require("express");

const cors = require("cors");
const {
  getAll,
  getOneView,
  getOneStars,
} = require("./controllers/ItemControllers");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://alexey:1q2w3e4r@cluster0.jnf0sea.mongodb.net/work?retryWrites=true&w=majority"
  )
  .then(() => console.log(`DB OK! http://localhost:${PORT}`))
  .catch(() => console.log(`DB error, ${err}`));
const PORT = 1112;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/projects", getAll);
app.get("/projects/:id", getOneView);
app.get("/projects/star/:id", getOneStars);

app.get("/test", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server ${PORT}: OK!`);
  }
});
