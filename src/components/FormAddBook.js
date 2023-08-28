import React, { useState } from 'react';
import AddBook from './AddBook';
import '../assets/styles/formAddBook.css';

function FormAddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddBook = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <section className="addBook-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="form-container">
        <input
          className="input-title"
          type="text"
          id="title"
          name="title"
          placeholder="Book title"
          required
          onChange={handleTitleChange}
          value={title}
        />
        <input
          className="input-author"
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          required
          onChange={handleAuthorChange}
          value={author}
        />
        <select
          className="input-category"
          id="category"
          name="category"
          required
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="" disabled selected>Category</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Thriller">Thriller</option>
        </select>
        <AddBook
          title={title}
          author={author}
          category={category}
          onBookAdded={handleAddBook}
        />
      </form>
    </section>
  );
}

export default FormAddBook;
