import React, { useState } from "react";
const data = [
  "https://picsum.photos/id/1/700/300",
  "https://picsum.photos/id/2/700/300",
  "https://picsum.photos/id/3/700/300",
  "https://picsum.photos/id/4/700/300",
  "https://picsum.photos/id/5/700/300",
];

const ImgSlider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const handlePreviousClick = () => {
    if (activeImage === 0) setActiveImage(data.length - 1);
    else setActiveImage(activeImage - 1);
  };
  const handleNextClick = () => {
    setActiveImage((activeImage + 1) % data.length);
  };
  return (
    <>
      <h1>Image slider</h1>
      <div className="flex justify-center">
        <button className="font-bold p-4 m-10" onClick={handlePreviousClick}>
          Previous
        </button>
        <img src={data[activeImage]} className="w-[700px]" alt="wallpapers" />
        <button className="font-bold p-4 m-10" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
};

export default ImgSlider;
