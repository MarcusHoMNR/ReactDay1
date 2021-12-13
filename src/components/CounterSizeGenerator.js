import { useState } from "react";

function CounterSizeGenerator(props) {
  const [size, setSize] = useState(0);

  function handleChangeSize(event) {
    if (isNaN(parseInt(event.target.value))) {
      setSize(0);
      props.updateSize(0);
      return;
    }

    if (parseInt(event.target.value) < 0) {
      setSize(0);
      props.updateSize(0);
      return;
    }

    if (parseInt(event.target.value) > 99) {
      setSize(99);
      props.updateSize(99);
      return;
    }

    setSize(parseInt(event.target.value));
    props.updateSize(parseInt(event.target.value));
  }

  return (
    <div>
      <span>Size:</span>
      <input value={size} type="number" onChange={handleChangeSize}></input>
    </div>
  );
}

export default CounterSizeGenerator;
