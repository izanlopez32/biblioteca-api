const express = require("express");
const app = express();
const booksRouter = require("./routes/books");

app.use(express.json());
app.use("/api/books", booksRouter);

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
