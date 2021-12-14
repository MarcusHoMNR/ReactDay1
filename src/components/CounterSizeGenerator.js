import { useDispatch } from "react-redux";
import { UPDATE_SIZE } from "../constant/constant";

function CounterSizeGenerator(props) {
  const dispatch = useDispatch();
  function handleChangeSize(event) {
    var updateSize;

    if (
      isNaN(parseInt(event.target.value)) ||
      parseInt(event.target.value) < 0
    ) {
      updateSize = 0;
    } else if (parseInt(event.target.value) > 99) {
      updateSize = 99;
    } else {
      updateSize = parseInt(event.target.value);
    }

    dispatch({
      type: UPDATE_SIZE,
      payload: updateSize,
    });
  }

  return (
    <div>
      <span>Size:</span>
      <input type="number" onChange={handleChangeSize}></input>
    </div>
  );
}

export default CounterSizeGenerator;
