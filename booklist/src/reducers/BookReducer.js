export const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "DELETE_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
