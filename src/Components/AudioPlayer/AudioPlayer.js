import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "../AudioPlayer/AudioPlayer.css";

const AudioPlayer = (props) => {
  return (
    <div className="players">
      <div className="musicBox">
        <img className="coverImg" src={props.cover}></img>
        <ReactAudioPlayer
          src={props.files}
          autoPlay={false}
          controls
          controlsList="nodownload"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
