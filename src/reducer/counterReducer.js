import { RESET_SUM, UPDATE_SIZE, UPDATE_SUM } from "../constant/constant";

const initState = { size: 0, sum: 0 };

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SIZE:
      return { ...state, size: action.payload };
    case UPDATE_SUM:
      return { ...state, sum: state.sum + action.payload };
    case RESET_SUM:
      return { ...state, sum: 0 };
    default:
      return state;
  }
};

export default counterReducer;
