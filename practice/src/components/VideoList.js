import React from "react";
import PlayButton from "./PlayButton";
import Video from "./Video";

const VideoList = ({ videos, deleteVideo, editVideo }) => {
  return (
    <>
      <div className="flex justify-center flex-wrap">
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            verified={video.verified}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          >
            <PlayButton
              message="Play-msg"
              onPlay={() => console.log("playy....", video.title)}
              onPause={() => console.log("pause....", video.title)}
            >
              {video.title}
            </PlayButton>{" "}
          </Video>
        ))}
      </div>
    </>
  );
};

export default VideoList;
