import React from "react";
import "../../Pages/Music/Music.css";

const Music = (props) => {
  return (
    <div className="topMargin">
      <h1 className="musicTitle">Music</h1>
      <h2 className=" musicTitle">Projects</h2>

      <h2 className="musicSubTitle">Out Of Context</h2>

      <div className="bandContentHolder">
        <iframe
          className="musicBox"
          src="https://bandcamp.com/EmbeddedPlayer/track=1912035103/size=large/bgcol=333333/linkcol=00ffff/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://outofcontext2016.bandcamp.com/track/no-faith-demo">
            No Faith (Demo) by Out Of Context
          </a>
        </iframe>

        <p className="bandmsg">
          Female fronted hard rock band from Croydon. Charliy Vaughan (Lead
          Vocals) Steven Klavins (Lead Guitar/Backing Vocals) Stephen Mussett
          (Rhythm Guitar) Ryan Nicholls (Bass Guitar) Phill Jones (Drum Kit)
        </p>
      </div>

      <h2 className="musicSubTitle">Punching Judy</h2>

      <div className="bandContentHolder">
        <iframe
          className="musicBox"
          src="https://bandcamp.com/EmbeddedPlayer/album=3137507976/size=large/bgcol=333333/linkcol=00ffff/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://punchingjudy1.bandcamp.com/album/demo-2014">
            Demo 2014 by Punching Judy
          </a>
        </iframe>

        <p className="bandmsg">
          Female fronted hard rock band from Croydon. Charliy Vaughan (Lead
          Vocals) Steven Klavins (Lead Guitar/Backing Vocals) Stephen Mussett
          (Rhythm Guitar) Ryan Nicholls (Bass Guitar) Phill Jones (Drum Kit)
        </p>
      </div>
    </div>
  );
};

export default Music;
