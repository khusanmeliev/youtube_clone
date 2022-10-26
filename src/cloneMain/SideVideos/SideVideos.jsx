import React from "react";
import { Image, TitleVideo, VideoItems } from "./styles";

const SideVideos = ({ video, onVideoSelect }) => {
  return (
    <>
      <VideoItems onClick={() => onVideoSelect(video)}>
        <Image src={video.snippet.thumbnails.medium.url} alt="overlay" />
        <TitleVideo>
          <b>{video.snippet.title}</b>
        </TitleVideo>
      </VideoItems>
    </>
  );
};

export default SideVideos;
