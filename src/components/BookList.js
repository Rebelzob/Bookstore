import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchBooksAsync } from '../redux/books/booksSlice';
import BookDetails from './BookDetails';
import '../assets/styles/bookList.css';

function BookList() {
  const idRef = useRef();
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  return (
    <div className="book-container">
      {Object.entries(books).map(([id, bookArray]) => {
        const book = bookArray[0];
        idRef.current = id;

        return (
          <BookDetails
            id={idRef.current}
            key={idRef.current}
            title={book.title}
            author={book.author}
            category={book.category}
            chapter={book.chapter}
            percentage={book.percentage}
          />
        );
      })}
    </div>
  );
}

export default BookList;
