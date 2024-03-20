import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info)
  const {snippet, statistics} = info; //extracting the LHS from info
  const {channelTitle, title, thumbnails, publishedAt} = snippet;

  return (
    <div className="p-2 m-2 w-64 shadow-md cursor-pointer">
      <img className="rounded-md" src={thumbnails.medium.url} alt="thumbnail" />
      <h1 className="font-bold py-2">{title}</h1>
      <h2>{channelTitle}</h2>
      <ul>
        <li>{statistics.viewCount} views</li>
        <li>{publishedAt}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
