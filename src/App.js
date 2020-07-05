import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        {/* Both navbar and booklist are attached to props of ThemeContextProvider as wrapped inside */}
        <Navbar />
        <BookList />
      </ThemeContextProvider>  
    </div>
  );
}

export default App;
 