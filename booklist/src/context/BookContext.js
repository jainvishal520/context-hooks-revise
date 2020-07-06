import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const addBook = (book) => {
    setBooks([...books, book]);
  };
  const deleteBook = (id) => {
    const filteredBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(filteredBooks);
  };
  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
