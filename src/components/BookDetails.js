import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../assets/styles/bookDetails.css';

function BookDetails({ book }) {
  return (
    <section className="book-element--container">
      <div className="book-info">
        <p>{book.category}</p>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <div className="buttons">
          <button id={book.id} type="button">Comments</button>
          <span className="separator">|</span>
          <button id={book.id} type="button">Remove</button>
          <span className="separator">|</span>
          <button id={book.id} type="button">Edit</button>
        </div>
      </div>
      <div>
        <div className="percentage-container">
          <CircularProgressbar className="circular-progressbar" value={book.percentage} text={`${book.percentage} %`} />
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="update">
        <p>
          Current Chapter
        </p>
        <p>
          {book.chapter}
        </p>
        <button id={book.id} type="button">Update Progress</button>
      </div>
    </section>
  );
}

BookDetails.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    chapter: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookDetails;
