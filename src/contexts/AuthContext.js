import React, { createContext, Component, useState } from "react";
export const AuthContext = createContext();

// // -------------------- Class based context --------------------

// class AuthContextProvider extends Component {
//   state = {
//     isAuthenticated: false,
//   };
//   toggleAuth = () => {
//     this.setState({
//       isAuthenticated: !this.state.isAuthenticated,
//     });
//   };
//   render() {
//     return (
//       <AuthContext.Provider
//         value={{ ...this.state, toggleAuth: this.toggleAuth }}
//       >
//         {this.props.children}
//       </AuthContext.Provider>
//     );
//   }
// }
// // -------------------- END Class based context --------------------

// -------------------- Functional component based context --------------------
const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
  });
  const toggleAuth = () => {
    setAuth({
      isAuthenticated: !auth.isAuthenticated,
    });
  };
  return (
    <AuthContext.Provider value={{ ...auth, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// -------------------- END Functional component based context --------------------

export default AuthContextProvider;
