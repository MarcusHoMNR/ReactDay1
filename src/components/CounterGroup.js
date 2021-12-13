import { useState, useEffect } from "react";
import Counter from "./Counter";

function CounterGroup(props) {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const counters = new Array(props.size).fill(Date.now());
    setCounters(counters);
  }, [props.size]);

  function increase() {
    props.increase();
  }

  function decrease() {
    props.decrease();
  }

  return (
    <>
      {counters.map((item, index) => {
        return (
          <Counter
            key={item + index}
            increase={increase}
            decrease={decrease}
          ></Counter>
        );
      })}
    </>
  );
}

export default CounterGroup;
