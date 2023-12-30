import React, { useState } from "react";
import "./PlayButton.css";

const PlayButton = ({ message, children, onClick, onPlay, onPause }) => {
  let [playing, setPlaying] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    if (playing) onPause();
    else onPlay();
    setPlaying(!playing);
  }

  // let playing = false;
  // function handleClick() {
  //   if (playing) onPause();
  //   else onPlay();
  //   playing = !playing;
  // }
  return (
    <>
      <button className=" pl-5 pr-5" onClick={handleClick}>
        {children} {playing ? "⏸️" : "⏯️"}
      </button>
    </>
  );
};

export default PlayButton;
