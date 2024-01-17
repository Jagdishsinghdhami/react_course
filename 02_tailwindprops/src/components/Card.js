import React from "react";

const Card = ({ name, image, btnText = "Visit Me", children }) => {
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md m-4">
        <img
          src={`https://picsum.photos/id/${image}/200/300`}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{name}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis? {children}
          </p>
          <button className="bg-black rounded-20 p-2 rounded-full overflow-hidden mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} →
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
