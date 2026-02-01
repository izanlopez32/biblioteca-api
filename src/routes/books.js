const express = require("express");
const router = express.Router();
let books = require("../data/books");

// GET /api/books
// Devuelve todos los libros, con filtros opcionales por autor o título
router.get("/", (req, res) => {
    const { author, title } = req.query;

    let result = books;
// Filtrar por autor si se envía en la query
    if (author) {
        result = result.filter(b => b.author.toLowerCase().includes(author.toLowerCase()));
    }
// Filtrar por título si se envía en la query
    if (title) {
        result = result.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
    }

    res.json(result);
});

// GET /api/books/:id
// Devuelve un libro por su ID
router.get("/:id", (req, res) => {
    const book = books.find(b => b.id === req.params.id);

    if (!book) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }

    res.json(book);
});

// POST /api/books
// Crea un nuevo libro
router.post("/", (req, res) => {
    const { title, author } = req.body;
// Validación básica de errores
    if (!title || !author) {
        return res.status(400).json({ error: "title y author son obligatorios" });
    }

    const newBook = {
        // ID único basado en timestamp(podriamos crear un ID autoincremental si lo desearamos)
        id: String(Date.now()),
        title,
        author,
        isRead: false,
        createdAt: new Date().toISOString()
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT /api/books/:id
// Actualiza completamente un libro existente
router.put("/:id", (req, res) => {
    const { title, author, isRead } = req.body;
    const book = books.find(b => b.id === req.params.id);

    if (!book) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }
// Validación de datos
    if (!title || !author || typeof isRead !== "boolean") {
        return res.status(400).json({ error: "Datos inválidos" });
    }
// Actualización de datos
    book.title = title;
    book.author = author;
    book.isRead = isRead;

    res.json(book);
});

// PATCH /api/books/:id/read
// Alterna el estado leído/no leído del libro
router.patch("/:id/read", (req, res) => {
    const book = books.find(b => b.id === req.params.id);

    if (!book) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }

    book.isRead = !book.isRead;

    res.json({ message: "Estado actualizado", book });
});

module.exports = router;
