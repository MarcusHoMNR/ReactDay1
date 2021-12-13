import { useState, useEffect } from "react";
import Counter from "./Counter";

function CounterGroup(props) {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const counters = new Array(props.size).fill(Date.now());
    setCounters(counters);
  }, [props.size]);
  return (
    <>
      {counters.map((item, index) => {
        return <Counter key={item + index}></Counter>;
      })}
    </>
  );
}

export default CounterGroup;
