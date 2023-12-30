import React from "react";
import "./Video.css";

const Video = ({
  id = "6",
  title,
  channel = "jagdish dhami",
  views,
  time,
  verified,
  children,
  deleteVideo,
  editVideo,
}) => {
  return (
    <>
      <div className="containers m-2 bg-black text-white pl-1">
        <button className="close" onClick={() => deleteVideo(id)}>
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
