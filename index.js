const express = require("express");
const path = require("path");
const productRouter = require("./routes/products");
const app = express();
const port = 8002;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Te estamos escuchando en http://localhost:${port}`);
});