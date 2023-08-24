import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function AddBook({ title, author }) {
  const dispatch = useDispatch();

  const handlerAddBook = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <button type="submit" onClick={handlerAddBook}>
      Add Book
    </button>
  );
}

AddBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default AddBook;
