import React, { createContext, useState, useReducer, useEffect } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //   const [books, setBooks] = useState([]);
  // UseReducer takese in 3rd arg as an cb func which return a default value if 2nd arg is empty
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
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
