import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ url }: any) => {
  console.log('url from video component', url);
  return <>{url && <ReactPlayer url={url} controls={true} width="100%" height="100%" playing={url && true}/>}</>;
};

export default Video;
