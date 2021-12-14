import { UPDATE_SIZE, UPDATE_SUM } from "../constant/constant";

const initState = { size: 0, sum: 0 };

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SIZE:
      return { ...state, size: action.payload };
    case UPDATE_SUM:
      return { ...state, sum: state.sum + action.payload };
    default:
      return state;
  }
};

export default counterReducer;
