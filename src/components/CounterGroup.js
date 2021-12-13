import Counter from "./Counter";

function CounterGroup(props) {
  return (
    <>
      <span>{props.size}</span>
      <Counter></Counter>
    </>
  );
}

export default CounterGroup;
