import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../assets/styles/bookDetails.css';
import { useDispatch } from 'react-redux';
import DeleteBook from './DeleteBook';
import { removeBookAsync } from '../redux/books/booksSlice';

function BookDetails({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  const percentage = Math.floor(Math.random() * 101);
  const chapter = percentage <= 10 ? 1 : Math.min(
    Math.max(parseInt(percentage.toString()[0], 10), 1),
    percentage === 100 ? 10 : 9,
  );

  const handleRemoveBook = () => {
    dispatch(removeBookAsync(id));
  };

  return (
    <section className="book-element--container">
      <div className="book-info">
        <p className="category">{category}</p>
        <p className="subtitle">{title}</p>
        <p className="author">{author}</p>
        <div className="buttons">
          <button id={id} type="button">Comments</button>
          <span className="button-separator" />
          <DeleteBook id={id} onDelete={handleRemoveBook} />
          <span className="button-separator" />
          <button id={id} type="button">Edit</button>
        </div>
      </div>
      <div className="percentage-container">
        <div className="percentage-animation">
          <CircularProgressbar className="circular-progressbar" value={percentage} />
        </div>
        <div className="percentage-info">
          <p className="percentage">{`${percentage}%`}</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <span className="section-separator" />
      <div className="update">
        <p className="update-title">
          CURRENT CHAPTER
        </p>
        <p className="chapter-p">
          {`Chapter ${chapter}`}
        </p>
        <button id={id} type="button">Update Progress</button>
      </div>
    </section>
  );
}

BookDetails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookDetails;
