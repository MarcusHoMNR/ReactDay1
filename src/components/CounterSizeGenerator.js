import { useState } from "react";

function CounterSizeGenerator(props) {
  const [size, setSize] = useState(0);

  function handleChangeSize(event) {
    const size = parseInt(event.target.value);
    setSize(size);
    props.updateSize(size);
  }

  return (
    <div>
      <span>Size:</span>
      <input value={size} type="number" onChange={handleChangeSize}></input>
    </div>
  );
}

export default CounterSizeGenerator;
