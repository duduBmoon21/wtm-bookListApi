let books = [];
let currentId = 1;

const createBook = (title, description = '') => {
  const newBook = {
    id: currentId++,
    title,
    description,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  books.push(newBook);
  return newBook;
};

const getAllBooks = () => {
  return [...books];
};

const updateBook = (id, title, description) => {
  const bookIndex = books.findIndex(book => book.id === Number(id));
  
  if (bookIndex === -1) {
    throw new Error('Book not found');
  }

  const updatedBook = {
    ...books[bookIndex],
    title: title || books[bookIndex].title,
    description: description !== undefined ? description : books[bookIndex].description,
    updatedAt: new Date().toISOString()
  };

  books[bookIndex] = updatedBook;
  return updatedBook;
};

const deleteBook = (id) => {
  const initialLength = books.length;
  books = books.filter(book => book.id !== Number(id));
  
  if (books.length === initialLength) {
    throw new Error('Book not found');
  }
};

module.exports = {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook
};