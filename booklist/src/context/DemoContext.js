import React, { createContext, useReducer, useState } from "react";
export const AgeContext = createContext();
const ageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return state + 1;
    case "ADD_TWO":
      return state + 2;
    case "ADD_NUM":
      return state + action.num;
    default:
      return state;
  }
};
//call tihs dispatch func from a component... then this will dispatch an action to attached reducer i.e ageReducer here
// dispatch({type: 'ADD_ONE'})
// dispatch({type: 'ADD_NUM', num: 4})
const AgeContextProvider = (props) => {
  // const [age, setAge] = useState(20);
  const [age, dispatch] = useReducer(ageReducer, 20);
  // const addOneToAge = () => {
  //   setAge(age+1);
  // }
  // const addTwoToAge = () => {
  //   setAge(age+2);
  // }
  // const addNumToAge = (num) => {
  //   setAge(age+num);
  // }
  return (
    <AgeContext.Provider value={{ age, dispatch }}>
      {props.children}
    </AgeContext.Provider>
  );
};
export default AgeContextProvider;

// const [stateTitle, dispatch] = useReducer(nameofreducer, initial value of state)
// useReducer returns an array of title and a function named dispatch
