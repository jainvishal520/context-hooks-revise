import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class Navbar extends Component {
//   // static means that the function is applied directly onto the class, not on the class instance.
//   // This means that contextType becomes a 'property/method' of the class itself... more or less
//   // like adding a method to the prototype of a class

//   // -- using theme context --
//   static contextType = ThemeContext;
//   render() {
//     console.log(this.context); //  It should be equal to what we passed inside of value in ThemeContextProvider
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <nav style={{ background: theme.ui, color: theme.syntax }}>
//         <h1>Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }

// UseContext hook implementation
const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
