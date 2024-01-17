import React, { useEffect, useState } from "react";
import { data } from "./data";

const ImgSliders = () => {
  const [activeImage, setActiveImage] = useState(0);
  const handlePreviousClick = () => {
    if (activeImage === 0) setActiveImage(data.length - 1);
    else setActiveImage(activeImage - 1);
  };
  const handleNextClick = () => {
    setActiveImage((activeImage + 1) % data.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 13000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <>
      <h1 className="text-center m-4 p-4 text-4xl bg-black text-white">
        Image slider
      </h1>
      <div className="flex justify-center">
        <button className="font-bold p-4 m-10" onClick={handlePreviousClick}>
          Previous
        </button>
        {data.map((url, i) => (
          <img
            key={i}
            src={url}
            alt="wallpapers"
            className={
              "w-[700px] h-[500px] object-contain " +
              (activeImage === i ? "block" : "hidden")
            }
          />
        ))}
        <button className="font-bold p-4 m-10" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
};

export default ImgSliders;
