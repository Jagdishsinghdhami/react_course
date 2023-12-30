import { useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  function deleteVideo(id) {
    console.log(id);
    setVideos(videos.filter((video) => video.id !== id));
  }
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }
  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
  }
  return (
    <>
      <h1 className="text-center bg-slate-900 p-2 text-white text-3xl">
        Video Playlist
      </h1>
      <AddVideo
        AddVideos={addVideos}
        updateVideo={updateVideo}
        editableVideo={editableVideo}
      ></AddVideo>
      <VideoList
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>
      {/* <Counter /> */}
      {/* <PlayButton
        message="Play-msg"
        onPlay={() => console.log("playy....")}
        onPause={() => console.log("pause....")}
      >
        Play
      </PlayButton> */}
      {/* <PlayButton message="Pause-msg" onClick={() => alert("playy....")}>
        Pause
      </PlayButton> */}
    </>
  );
}

export default App;
