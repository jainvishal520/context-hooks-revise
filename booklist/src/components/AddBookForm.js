import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const AddBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [book, setBook] = useState({
    title: "",
    author: "",
    likes: 0,
  });
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ ...book, id: Math.random() });
  };
  const { title, author, likes } = book;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Book Name</label>
        <input id="title" value={title} type="text" onChange={handleChange} />
        <label>Book Author</label>
        <input id="author" value={author} type="text" onChange={handleChange} />
        <label>Book Likes</label>
        <input id="likes" value={likes} type="number" onChange={handleChange} />
        <input type="submit" value="add song" />
      </form>
    </div>
  );
};

export default AddBookForm;
