import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video
        className="video_player"
        loop
        src="https://player.vimeo.com/external/484412375.sd.mp4?s=52d106f697b09a7f11f4292beddc601969469728&profile_id=165&oauth2_token_id=57447761"
      ></video>

      {/*videofooter*/}
      {/*sidebar*/}
    </div>
  );
}

export default Video;
