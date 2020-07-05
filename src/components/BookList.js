import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
// this consumer expects us to pass in a function and has parameter context
const BookList = () => {
  return (
    <AuthContext.Consumer>
      {(authContext) => (
        <ThemeContext.Consumer>
          {(themeContext) => {
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            const { isAuthenticated, toggleAuth } = authContext;
            return (
              <div
                className="book-list"
                style={{ color: theme.syntax, background: theme.bg }}
              >
                <div onClick={toggleAuth}>
                  {isAuthenticated ? "Logged in" : "logged out"}
                </div>
                <ul>
                  <li style={{ background: theme.ui }}>the way of kings</li>
                  <li style={{ background: theme.ui }}>the name of the wind</li>
                  <li style={{ background: theme.ui }}>the final empire</li>
                </ul>
              </div>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};

export default BookList;
