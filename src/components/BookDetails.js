import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../assets/styles/bookDetails.css';
import { useDispatch } from 'react-redux';
import DeleteBook from './DeleteBook';
import { removeBookAsync } from '../redux/books/booksSlice';

function BookDetails({
  id, title, author, category, chapter, percentage,
}) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBookAsync(id));
  };

  return (
    <section className="book-element--container">
      <div className="book-info">
        <p>{category}</p>
        <p>{title}</p>
        <p>{author}</p>
        <div className="buttons">
          <button id={id} type="button">Comments</button>
          <span className="separator">|</span>
          <DeleteBook id={id} onDelete={handleRemoveBook} />
          <span className="separator">|</span>
          <button id={id} type="button">Edit</button>
        </div>
      </div>
      <div>
        <div className="percentage-container">
          <CircularProgressbar className="circular-progressbar" value={percentage} text={`${percentage} %`} />
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="update">
        <p>
          Current Chapter
        </p>
        <p>
          {chapter}
        </p>
        <button id={id} type="button">Update Progress</button>
      </div>
    </section>
  );
}

BookDetails.defaultProps = {
  chapter: 0,
  percentage: 0,
};

BookDetails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  chapter: PropTypes.number,
  percentage: PropTypes.number,
};

export default BookDetails;
