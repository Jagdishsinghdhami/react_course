import React, { useEffect, useRef, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatch";
const initialState = {
  channel: "jagdish dhami",
  time: "1 Month",
  verified: true,
  title: "",
  views: "",
};

const AddVideo = ({ editableVideo }) => {
  const [video, setVideo] = useState(initialState);
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
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
    // inputRef.current.value = "jagdish singh";
    // inputRef.current.focus();
    inputRef.current.placeholder = "";
    "type here".split("").forEach((char, i) => {
      setTimeout(() => {
        inputRef.current.placeholder = inputRef.current.placeholder + char;
      }, 100 * i);
    });
  }, [editableVideo]);

  return (
    <div className="bg-black text-black p-2 m-2">
      <form>
        <input
          ref={inputRef}
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
