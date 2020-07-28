const initialState = {

  isOpen: false,
  message: ''
};

const uiReducer = (state = initialState, action) => {

    switch (action.type) {

      case "SNACKBAR_SHOW":

        return {

          ...state,
          isOpen: true,
          message: action.message

        };

      case "SNACKBAR_CLOSE":
          
        return {
          ...state,
          isOpen: false
      };

      default:

        return state;
    }
  };
  
  export default uiReducer;