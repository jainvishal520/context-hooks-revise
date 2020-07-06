import React, { createContext, Component, useState } from "react";

export const ThemeContext = createContext();

// // -------------------- Class based context --------------------
// // state in this component will be the data which we want to share b/w components

// class ThemeContextProvider extends Component {
//   state = {
//     isLightTheme: true,
//     light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
//     dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
//   };
//   toggleTheme = () => {
//     this.setState({
//       isLightTheme: !this.state.isLightTheme,
//     });
//   };
//   render() {
//     return (
//       // this value property will contain data which we want to share to components this wraps - value will be an object
//       <ThemeContext.Provider
//         value={{ ...this.state, toggleTheme: this.toggleTheme }}
//       >
//         {/* // Inside this provider we want to have those components will we want to provide this context  */}
//         {this.props.children}
//         {/* props of ThemeContextProvider */}
//       </ThemeContext.Provider>
//     );
//   }
// }

// As the state changes by update func. ... the value being passed changes ... and therefore the components which consume this data updates
// --------------------END Class component based context --------------------

// -------------------- Functional component based context --------------------
const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });
  const toggleTheme = () => {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };
  return (
    // this value property will contain data which we want to share to components this wraps - value will be an object
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {/* // Inside this provider we want to have those components will we want to provide this context  */}
      {props.children}
      {/* props of ThemeContextProvider */}
    </ThemeContext.Provider>
  );
};
// -------------------- END Functional component based context --------------------

export default ThemeContextProvider;
