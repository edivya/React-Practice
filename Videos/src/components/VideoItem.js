import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        clasName="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      {/* // avatar = image shown in circle */}
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
