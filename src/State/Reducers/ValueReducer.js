const reducer = (state = 0, action) => {
  if (action.type === "inc") {
    return state + action.payload;
  } else if (action.type === "dec") {
    return state - action.payload;
  } else return state;
};
export default reducer;
