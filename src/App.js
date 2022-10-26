import React, { useState } from "react";
import Search from "./cloneMain/Search/Search.jsx";
import { VideoLists, VideoMain, VideoSec, Wrapper } from "./styles.js";
import URL from "./cloneMain/api/URL";
import Video from "./cloneMain/Video/Video";
import ListVideos from "./cloneMain/ListVideos/ListVideos.jsx";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({ id: {}, snippet: {} });

  async function videoSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: " AIzaSyAYnnSTDkcUOoV7COZqu5iP-FiviwsaRhY",
        q: searchTerm,
      },
    });

    console.log(videos);
    setVideos(videos);
    setSelectedVideos(videos[0]);
  }

  return (
    <Wrapper>
      <div>
        <Search onSubmit={videoSubmit} />
      </div>

      <VideoMain>
        <VideoSec>
          <Video video={selectedVideos} />
        </VideoSec>
        <VideoLists>
          <ListVideos videos={videos} onVideoSelect={setSelectedVideos} />
        </VideoLists>
      </VideoMain>
    </Wrapper>
  );
};

export default App;
