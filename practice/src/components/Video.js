import React, { useContext } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";

const Video = ({
  id = "6",
  title,
  channel = "jagdish dhami",
  views,
  time,
  verified,
  children,
  editVideo,
}) => {
  const theme = useContext(ThemeContext);
  const dispatch = useVideoDispatch();
  return (
    <>
      <div className={`containers m-2 bg-black text-white pl-1 ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/300/300`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title font-bold text-cyan-950">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Video;
