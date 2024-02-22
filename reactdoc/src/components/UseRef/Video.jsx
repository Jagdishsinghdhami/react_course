import { useRef, useState } from "react";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {" "}
        {isPlaying ? "Pause" : "Play"}
      </button>
      <br />
      <VideoPLayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
};

function VideoPLayer({ src, isPlaying }) {
  const ref = useRef(null);
  if (isPlaying) {
    ref.current.play();
  } else {
    ref.current.pause();
  }
  return <video ref={ref} src={src} loop playsInline />;
}

export default Video;
