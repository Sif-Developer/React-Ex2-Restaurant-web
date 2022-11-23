import { useState } from "react";




const Counter = (props) => {
  const [count, setCount] = useState(props.valor);
  const increment = () => {
    setCount(count + 100);
  };
  const decrement = () => {
    setCount(count - 50);
  };
  return (
    <div>
      Counter:{count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};




export default Counter;
