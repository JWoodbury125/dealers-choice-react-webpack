const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/javascript_reads"
);

const Book = db.define("book", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  retailer: {
    type: Sequelize.STRING,
  },
});

const Author = db.define("author", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
});

Book.belongsTo(Author);
Author.hasMany(Book);

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const marijn = await Author.create({ name: "Marijn Haverbeke" });
    const kyle = await Author.create({ name: "Kyle Simpson" });
    const mark = await Author.create({ name: "Mark Myers" });
    const jon = await Author.create({ name: "Jon Duckett" });
    const douglas = await Author.create({ name: "Douglas Crockford" });
    const ivelin = await Author.create({ name: "Ivelin Demirov" });
    const david = await Author.create({ name: "David Herman" });
    const nicolas = await Author.create({ name: "Nicholas C. Zakas" });
    await Book.create({
      name: "Eloquent JavaScript: A Modern Introduction to Programming",
      authorId: marijn.id,
      retailer: "Amazon",
    });
    await Book.create({
      name: "You Don’t Know JS Yet: Get Started",
      authorId: kyle.id,
      retailer: "Amazon",
    });
    await Book.create({
      name: "A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort",
      authorId: mark.id,
      retailer: "BarnesAndNoble",
    });
    await Book.create({
      name: "JavaScript & JQuery: Interactive Front-End Web Development",
      authorId: jon.id,
      retailer: "Amazon",
    });
    await Book.create({
      name: "JavaScript: The Good Parts",
      authorId: douglas.id,
      retailer: "Goodreads",
    });
    await Book.create({
      name: "Learn JavaScript VISUALLY",
      authorId: ivelin.id,
      retailer: "BarnesAndNoble",
    });
    await Book.create({
      name: "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      authorId: david.id,
      retailer: "Amazon",
    });
    await Book.create({
      name: "High-Performance JavaScript: Build Faster Web Application Interfaces",
      authorId: nicolas.id,
      retailer: "BarnesAndNoble",
    });
    await Book.create({
      name: "Professional JavaScript for Web Developer",
      retailer: "Amazon",
      authorId: nicolas.id,
    });
    await Book.create({
      name: "Understanding ECMAScript 6: The Definitive Guide For JavaScript Developers",
      authorId: nicolas.id,
      retailer: "BarnesAndNoble",
    });
  } catch (err) {
    console.log(err);
  }
};

syncAndSeed();

module.exports = { db, Book, Author, syncAndSeed };
