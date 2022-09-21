export const incValue = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "inc",
      payload: amount,
    });
  };
};
export const decValue = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "dec",
      payload: amount,
    });
  };
};
