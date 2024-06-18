import express from 'express';
import Book from '../models/book.model.js'; // Import the Book model
const router = express.Router();

// Route to get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error); // Add logging for debugging
    res.status(500).send('Server error');
  }
});

// Route to get a single book by ID
router.get('/:id', async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (book) {
      res.json(book);
    } else {
      console.log('Book not found'); 
      res.status(404).send('Book not found');
    }
  } catch (error) {
    console.error('Error fetching book:', error); 
    res.status(500).send('Server error');
  }
});

export default router;
