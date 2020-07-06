import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const { books, deleteBook } = useContext(BookContext);
  return books.length > 0 ? (
    books.map((book) => (
      <div onClick={() => deleteBook(book.id)}>{book.title}</div>
    ))
  ) : (
    <p>No books</p>
  );
};

export default BookList;
