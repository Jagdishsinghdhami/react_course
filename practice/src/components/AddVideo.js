import React, { useEffect, useState } from "react";
import "./AddVideo.css";
const initialState = {
  channel: "jagdish dhami",
  time: "1 Month",
  verified: true,
  title: "",
  views: "",
};

const AddVideo = ({ AddVideos, updateVideo, editableVideo }) => {
  const [video, setVideo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      AddVideos(video);
    }

    setVideo(initialState);
  };
  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  return (
    <div className="bg-black text-black p-2 m-2">
      <form>
        <input
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="title"
          value={video.title}
        />
        <input
          name="views"
          onChange={handleChange}
          type="text"
          placeholder="views"
          value={video.views}
        />

        <button onClick={handleSubmit}>
          {editableVideo ? "Edit" : "Add"} Video
        </button>
      </form>
    </div>
  );
};

export default AddVideo;
