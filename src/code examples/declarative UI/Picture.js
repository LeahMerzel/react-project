import React from "react";
import StaticPicture from './StaticPicture';
import InteractivePicture from './InteractivePicture';

function Picture(){
    return (
        <div className="trackers">
          <StaticPicture/>
          <InteractivePicture/>
        </div>
    )
}

export default Picture;