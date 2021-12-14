import { useSelector } from "react-redux";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultiCounter() {
  const sum = useSelector((state) => state.sum);
  const size = useSelector((state) => state.size);

  return (
    <>
      <CounterSizeGenerator></CounterSizeGenerator>
      <CounterGroupSum sum={sum}></CounterGroupSum>
      <CounterGroup size={size}></CounterGroup>
    </>
  );
}

export default MultiCounter;
