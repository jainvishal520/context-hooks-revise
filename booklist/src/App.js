import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BookContextProvider from "./context/BookContext";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <AddBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
