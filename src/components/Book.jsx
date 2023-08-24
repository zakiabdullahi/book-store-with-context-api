/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useBook from "../Contexts/BookContext";

const Book = ({ book }) => {
  const { deleteBook } = useBook();
  return (
    <div
      key={book.id}
      className="w-full  border border-gray-400  dark:text-white"
    >
      <img className="w-full object-cover h-40" src={book.imageUrl} alt="" />

      <div className="p-4">
        <div className="flex space-x-2 items-center">
          <h1 className="text-2xl">{book.name}</h1>
          <span className="text-xl">{book.author}</span>
        </div>

        <p>{book.description}</p>
        <h1 className="text-3xl">${book.price}</h1>
      </div>

      <div className="flex space-x-2 p-4">
        <Link
          to={`/edit/${book.id}`}
          type="submit"
          className="w-24 py-2 px-3  bg-indigo-400 text-white rounded-lg"
        >
          Update
        </Link>
        <button
          onClick={() => deleteBook(book.id)}
          type="submit"
          className="w-24 py-2 px-3  bg-indigo-400 text-white rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;
