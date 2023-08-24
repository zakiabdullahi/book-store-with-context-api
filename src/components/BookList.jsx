import useBook from "../Contexts/BookContext";
import Book from "./Book";

const BookList = () => {
  const { books } = useBook();
  return (
    <div>
      <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-4">
        {books.length > 0 &&
          books.map((book) => <Book key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default BookList;
