import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function DeleteBook({ id }) {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };
  return (
    <button type="button" onClick={handleRemoveBook}>
      Delete Book
    </button>
  );
}

DeleteBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteBook;
