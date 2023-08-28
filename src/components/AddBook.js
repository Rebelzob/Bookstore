import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/booksSlice';
import '../assets/styles/addBook.css';

function AddBook({
  title, author, category, onBookAdded,
}) {
  const dispatch = useDispatch();

  const handlerAddBook = () => {
    if (title !== '' && author !== '' && category !== '') {
      const newBook = {
        item_id: uuidv4(),
        title: title || 'Title',
        author: author || 'Author',
        category: category || 'Category',
      };
      onBookAdded();
      dispatch(addBookAsync(newBook));
    }
  };

  return (
    <button className="add-btn" type="button" onClick={handlerAddBook}>
      Add Book
    </button>
  );
}

AddBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onBookAdded: PropTypes.func.isRequired,
};

export default AddBook;
