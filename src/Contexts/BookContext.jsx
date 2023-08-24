/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer } from "react";
import { bookReducer, initialState } from "../Reducers/bookReducer";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const addBook = (book) => {
    const updatedBook = state.books.concat(book);

    dispatch({
      type: "CREATEBOOK",

      payload: { book: updatedBook },
    });
  };

  const updateBook = (post) => {
    const updatedBook = state.books.map((p) => (p.id === post.id ? post : p));

    dispatch({
      type: "EDITBOOK",
      payload: { book: updatedBook },
    });
  };

  const deleteBook = (id) => {
    const updatedBook = state.books.filter((book) => book.id !== id);

    dispatch({
      type: "DELETEBOOK",
      payload: { book: updatedBook },
    });
  };

  const values = {
    books: state.books,
    addBook,
    deleteBook,
    updateBook,
  };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

const useBook = () => {
  const context = useContext(BookContext);

  if (context === undefined) {
    throw new Error("useBook must be used within a BookProvider");
  }

  return context;
};

export default useBook;
