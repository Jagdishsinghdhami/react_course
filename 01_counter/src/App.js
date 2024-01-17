import React, { useState } from "react";
import "./App.css";
import ClassComp from "./components/ClassComp";

function App() {
  const [counter, setCounter] = useState(10);

  const handleClick = () => {
    if (counter === 20) setCounter(0);
    else setCounter(counter + 1);
    // if (counter <= 20) {
    //   setCounter(counter + 1);
    //   console.log(counter);
    // } else {
    //   setCounter(counter);
    //   console.log(`after 20 value is not increased`);
    // }
  };
  const handleMinusClick = () => {
    if (counter === 0) setCounter(20);
    else setCounter(counter - 1);
    // if (counter >= 0) {
    //   setCounter(counter - 1);
    //   console.log(`counterminus ${counter}`);
    // } else {
    //   setCounter(counter);
    //   console.log(`minus value is not acceptable`);
    // }
  };
  return (
    <>
      <h1>React course</h1>
      <ClassComp name="Jagdish Dhami" />
      <h1>counter value : {counter}</h1>

      <button onClick={handleClick}>Add Value</button>
      <br />
      <button onClick={handleMinusClick}>Minus Value</button>
    </>
  );
}

export default App;
