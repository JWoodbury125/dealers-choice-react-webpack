const { db, Book, Author, syncAndSeed } = require("./db");

const init = async () => {
  try {
    await db.sync({ force: true });
    syncAndSeed();
  } catch (err) {
    console.log(err);
  }
};
init();
