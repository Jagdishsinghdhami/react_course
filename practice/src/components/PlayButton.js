import React, { useContext, useState } from "react";
import "./PlayButton.css";
import ThemeContext from "../context/ThemeContext";

const PlayButton = ({ message, children, onClick, onPlay, onPause }) => {
  let [playing, setPlaying] = useState(false);
  const theme = useContext(ThemeContext);

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
      <button className={`pl-5 pr-5 ${theme}`} onClick={handleClick}>
        {children} {playing ? "⏸️" : "⏯️"}
      </button>
    </>
  );
};

export default PlayButton;
