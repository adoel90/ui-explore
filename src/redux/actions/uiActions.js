export const showSnackbar = message => {

    return dispatch => {
      dispatch({ type: "SNACKBAR_SHOW", message });
    };
};
  
export const closeSnackbar = () => {

    return dispatch => {
        dispatch({ type: "SNACKBAR_CLOSE" });
    };
};
