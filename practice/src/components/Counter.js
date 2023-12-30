import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const plusHandler = () => {
    console.log("plus number");
    setTimeout(() => {
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
    }, 3000);
  };
  const minusHandler = () => {
    console.log("minus number");
    setCounter(counter - 1);
  };
  return (
    <>
      <h1 className="text-3xl bg-black text-white flex text-center m-2 p-4 justify-center">
        Number Counting.. {counter}
      </h1>
      <div className="flex justify-center p-2 m-2">
        <button className="m-2" onClick={plusHandler}>
          plus Counter
        </button>
        <button className="m-2" onClick={minusHandler}>
          minus Counter
        </button>
      </div>
    </>
  );
};

export default Counter;
