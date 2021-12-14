import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_SIZE, RESET_SUM } from "../constant/constant";

function CounterSizeGenerator(props) {
  const [size, setSize] = useState(0);
  const dispatch = useDispatch();
  function handleChangeSize(event) {
    var inputSize;

    if (
      !isNaN(parseInt(event.target.value)) &&
      parseInt(event.target.value) >= 0 &&
      parseInt(event.target.value) <= 99
    ) {
      setSize(parseInt(event.target.value));
      inputSize = parseInt(event.target.value);
    } else {
      setSize(0);
      inputSize = 0;
    }

    dispatch({
      type: UPDATE_SIZE,
      payload: inputSize,
    });

    dispatch({
      type: RESET_SUM,
    });
  }

  return (
    <div>
      <span>Size:</span>
      <input value={size} type="number" onChange={handleChangeSize}></input>
    </div>
  );
}

export default CounterSizeGenerator;
