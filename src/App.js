import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        {/* Both navbar and booklist are attached to props of ThemeContextProvider as wrapped inside */}
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
