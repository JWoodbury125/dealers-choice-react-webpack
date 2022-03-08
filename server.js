const { db, Book, Author, syncAndSeed } = require("./db");
const express = require("express");
const app = express();
const path = require("path");

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/books", async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.send(books);
  } catch (ex) {
    next(ex);
  }
});

const init = async () => {
  try {
    await db.sync({ force: true });
    syncAndSeed();
  } catch (err) {
    console.log(err);
  }
};
init();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
