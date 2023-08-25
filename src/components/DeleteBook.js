import React from 'react';
import PropTypes from 'prop-types';

function DeleteBook({ id, onDelete }) {
  const handleRemoveBook = () => {
    onDelete(id);
  };
  return (
    <button type="button" onClick={handleRemoveBook}>
      Delete Book
    </button>
  );
}

DeleteBook.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteBook;
