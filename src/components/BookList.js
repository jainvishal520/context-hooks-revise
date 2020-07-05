import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
// this consumer expects us to pass in a function and has parameter context
const BookList = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div
            className="book-list"
            style={{ color: theme.syntax, background: theme.bg }}
          >
            <ul>
              <li style={{ background: theme.ui }}>the way of kings</li>
              <li style={{ background: theme.ui }}>the name of the wind</li>
              <li style={{ background: theme.ui }}>the final empire</li>
            </ul>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default BookList;
