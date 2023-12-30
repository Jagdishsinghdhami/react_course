import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);
  // const AddValue = () => {
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  // };

  const AddValue = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };
  const MinusValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1 className="text-center bg-black text-white m-4 p-4 text-4xl">
        Counter Interview Questions
      </h1>

      <p className="text-2xl text-center">
        In Interview we want one click of setcounter value add whole counter
        value increase then we use prevCounter the function
      </p>
      <h2 className="text-center bg-gray-400 width-50 text-white m-2 p-2 text-2xl">
        Counter Value is : {counter}
      </h2>
      <div className="flex justify-center mt-5">
        <button
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={AddValue}
        >
          Add Value
        </button>
        <button
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={MinusValue}
        >
          Minus Value
        </button>
      </div>
    </>
  );
};

export default Counter;
