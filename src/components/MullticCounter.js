import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultiCounter() {
  const [size, setSize] = useState(0);

  function updateCounterSize(size) {
    setSize(size);
  }

  return (
    <>
      <CounterSizeGenerator
        updateSize={updateCounterSize}
      ></CounterSizeGenerator>
      <CounterGroup size={size}></CounterGroup>
    </>
  );
}

export default MultiCounter;
