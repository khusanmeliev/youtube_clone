import React from "react";
import {
  ChannelTitle,
  DescriptionVideo,
  NoResult,
  TitleVideo,
  VideoIframe,
  VideoInfo,
} from "./styles";

const Videos = ({
  video: {
    id: { videoId },
    snippet: { title, channelTitle, description },
  },
}) => {
  if (!videoId) return <NoResult>No Results</NoResult>;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <VideoIframe>
        <iframe
          src={videoSrc}
          frameborder="0"
          allowFullScreen
          title="Video Player"
        ></iframe>

        <VideoInfo>
          <TitleVideo>{title}</TitleVideo>
          <ChannelTitle>{channelTitle}</ChannelTitle>
          <DescriptionVideo>{description}</DescriptionVideo>
        </VideoInfo>
      </VideoIframe>
    </>
  );
};

export default Videos;
