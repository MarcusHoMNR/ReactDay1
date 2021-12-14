import { UPDATE_SIZE } from "../constant/constant";

const counterReducer = (state = { size: 0 }, action) => {
  switch (action.type) {
    case UPDATE_SIZE:
      return { ...state, size: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
