import React, { useState } from 'react';
import AddBook from './AddBook';
import '../assets/styles/formAddBook.css';

function FormAddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
  };

  return (
    <div className="addBook-container">
      <h2>Add a new book</h2>
      <form className="form-container" onSubmit={handleAddBook}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Book title"
          required
          onChange={handleTitleChange}
          value={title}
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          required
          onChange={handleAuthorChange}
          value={author}
        />
        <AddBook title={title} author={author} />
      </form>
    </div>
  );
}

export default FormAddBook;
