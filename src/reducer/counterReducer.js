const counterReducer = (state = { size: 0 }, action) => {
  switch (action.type) {
    case "counter/updateSize":
      return { ...state, size: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
