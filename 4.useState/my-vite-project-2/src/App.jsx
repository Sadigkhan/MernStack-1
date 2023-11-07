import { useState } from "react";
import Count from "./components/Count";
import Increment from "./components/Increment";
import Decrement from "./components/decrement";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    counter <= 0 ? setCounter(0) : setCounter(counter - 1);
  };

  return (
    <>
      <Increment incrementCounter={incrementCounter} />
      <Count count={counter} />
      <Decrement decrementCounter={decrementCounter} />
    </>
  );
}

export default App;
