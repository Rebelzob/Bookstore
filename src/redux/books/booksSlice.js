import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'w186R3xSytJwmyhXqx5I';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;

export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooksAsync',
  async () => {
    const response = await axios.get(url);
    const books = await response.data;
    return books;
  },
);

export const addBookAsync = createAsyncThunk(
  'books/addBookAsync',
  async (book) => {
    const response = await axios.post(url, book);
    const newBook = await response.data;
    return JSON.stringify({ message: newBook, book });
  },
);

export const removeBookAsync = createAsyncThunk(
  'books/removeBookAsync',
  async (id) => {
    await axios.delete(`${url}/${id}`);
    return id;
  },
);

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooksAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        const newBook = JSON.parse(action.payload);
        const bookId = newBook.book.item_id;
        const tempBook = {
          title: newBook.book.title,
          author: newBook.book.author,
          category: newBook.book.category,
        };
        state.books = {
          ...state.books,
          [bookId]: [tempBook],
        };
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        const itemId = action.payload;
        delete state.books[itemId];
      });
  },
});

export const {
  addBook,
  removeBook,
  updateBook,
  setBooks,
} = booksSlice.actions;

export default booksSlice.reducer;
