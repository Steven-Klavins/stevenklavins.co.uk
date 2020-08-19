import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "../AudioPlayer/AudioPlayer.css";

const AudioPlayer = (props) => {
  return (
    <div className="players">
      <div className="musicBox">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img className="coverImg" src={props.cover} alt="Album Cover"></img>
        </a>
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
