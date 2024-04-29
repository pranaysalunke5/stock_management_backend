const express = require("express");

const app = express();
const port = 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.post("/post", (req, res) => {
  const { name, age } = req.body;
  console.log(name)
  res.json({ age, name });
});

app.listen(port, () => {
  console.log("Server is Running on post " + port);
});
