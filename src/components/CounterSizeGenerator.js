import { useState } from "react";

function CounterSizeGenerator(props) {
  const [size, setSize] = useState(0);

  function handleChangeSize(event) {
    setSize(event.target.value);
    props.updateSize(event.target.value);
  }

  return (
    <div>
      <span>Size:</span>
      <input value={size} type="number" onChange={handleChangeSize}></input>
    </div>
  );
}

export default CounterSizeGenerator;
