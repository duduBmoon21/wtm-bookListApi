const bookService = require('../services/bookService');

const createBook = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newBook = await bookService.createBook(title, description);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedBook = await bookService.updateBook(id, title, description);
    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    await bookService.deleteBook(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook
};