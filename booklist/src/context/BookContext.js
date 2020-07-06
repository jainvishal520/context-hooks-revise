import React, { createContext, useState, useReducer } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //   const [books, setBooks] = useState([]);
  const [books, dispatch] = useReducer(BookReducer, []);

  //   const addBook = (book) => {
  //     setBooks([...books, book]);
  //   };
  //   const deleteBook = (id) => {
  //     const filteredBooks = books.filter((book) => {
  //       return book.id !== id;
  //     });
  //     setBooks(filteredBooks);
  //   };
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
