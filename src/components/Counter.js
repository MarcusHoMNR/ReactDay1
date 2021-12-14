import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_SUM } from "../constant/constant";

function Counter(props) {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  function increase() {
    setNumber(number + 1);
    dispatch({ type: UPDATE_SUM, payload: 1 });
  }

  function decrease() {
    setNumber(number - 1);
    dispatch({ type: UPDATE_SUM, payload: -1 });
  }

  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{number}</span>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;
