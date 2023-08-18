import '../assets/styles/formAddBook.css';

function FormAddBook() {
  return (
    <div className="addBook-container">
      <h2>Add a new book</h2>
      <form className="form-container">
        <input type="text" id="title" name="title" placeholder="Book title" required />
        <select id="category" name="category">
          <option value="action">Action</option>
          <option value="biography">Biography</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="kids">Kids</option>
          <option value="learning">Learning</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="fantasy">Fantasy</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default FormAddBook;
