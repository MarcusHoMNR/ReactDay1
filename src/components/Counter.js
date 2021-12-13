import { useState } from "react";

function Counter(props) {
  const [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1);
    props.increase();
  }

  function decrease() {
    setNumber(number - 1);
    props.decrease();
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
