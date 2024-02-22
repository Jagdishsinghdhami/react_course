import { useEffect, useState } from "react";

const today = new Date();

const TimeDay = () => {
  const [color, setColor] = useState("red");
  let time = today.toLocaleTimeString("en-IN");
  // const [time, setTime] = useState(today.toLocaleTimeString("en-IN"));

  const handleColorChange = (e) => {
    const colorValue = e.target.value;
    setColor(colorValue);
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(today.toLocaleTimeString("en-IN"));
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, [time]);

  const timer = setInterval(() => {
    time;
  }, 1000);

  return (
    <>
      <h2>
        Pick a color :{" "}
        <select value={color} onChange={handleColorChange}>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
        </select>
      </h2>
      <h1 style={{ color: color }}>
        Time : {time.toUpperCase()} {timer}{" "}
      </h1>
    </>
  );
};

export default TimeDay;
