import BookDetails from './BookDetails';
import '../assets/styles/bookList.css';

function BookList() {
  const books = [
    {
      id: 1,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
      chapter: 5,
      percentage: 50,
    },
    {
      id: 2,
      title: 'Star Wars',
      author: 'George Lucas',
      category: 'Sci-Fi',
      chapter: 7,
      percentage: 55,
    },
    {
      id: 3,
      title: 'The Chronicles of Narnia',
      author: 'C.S. Lewis',
      category: 'Fantasy',
      chapter: 3,
      percentage: 25,
    },
  ];
  return (
    <div className="book-container">
      {books.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
