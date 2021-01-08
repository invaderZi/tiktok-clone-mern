import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
  const [playing, setPlaying] = useState(false);

  const videoReference = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoReference.current.pause();
      setPlaying(false);
    } else {
      videoReference.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoReference}
        src="https://player.vimeo.com/external/484412375.sd.mp4?s=52d106f697b09a7f11f4292beddc601969469728&profile_id=165&oauth2_token_id=57447761"
      ></video>

      {/*videofooter*/}

      <VideoFooter></VideoFooter>

      {/*sidebar*/}
    </div>
  );
}

export default Video;
