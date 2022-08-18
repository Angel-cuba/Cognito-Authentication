import { FavoriteOutlined, Pause, PlayArrow } from '@mui/icons-material';
import { updateVideo } from '../graphql/mutations';
import { API, graphqlOperation, Storage} from 'aws-amplify';

import React from 'react'
import { IconButton, Paper } from '@mui/material';
import VideoPlayer from './VideoPlayer';

const Video = ({video, videos, setVideos, index}: any) => {
  console.log('video', video);
   const [playVideo, setPlayVideo] = React.useState('');
  const [videoUrl, setVideoUrl] = React.useState('');
   const addLike = async (index: any) => {
    try {
      const video: any = videos[index];
      video.like = video.like + 1;

      delete video.createdAt;
      delete video.updatedAt;

      const { data }: any = await API.graphql(
        graphqlOperation(updateVideo, {
          input: video,
        })
      );
      console.log('data', data);
      const videoData: any = [...videos];
      videoData[index] = data.updateVideo;
      setVideos(videoData);
    } catch (error) {
      console.log(error);
    }
  };
    const play = async (index: any, url: string) => {
    if (playVideo === index) {
      setPlayVideo('');
      return;
    }
    try {
      const urlAccess = await Storage.get(url, { expires: 60 });
      console.log('urlAccess', urlAccess);
      setPlayVideo(index);
      setVideoUrl(urlAccess);
    } catch (error) {
      console.log('error accessing url from file on s3', error);
      setPlayVideo('');
      setVideoUrl('');
    }
    setPlayVideo(index);
  };
  return (
    <Paper key={video.id} variant="elevation" elevation={2} style={{ margin: '10px' }}>
            <div className="videoCard">
              <IconButton
                aria-label="play"
                onClick={() => play(index, video.url)}
                style={{ cursor: 'pointer' }}
              >
                {playVideo !== index ? <PlayArrow /> : <Pause />}
              </IconButton>
              <div className="">
                <div className="videoName">{video.name}</div>
                <div className="author">{video.author}</div>
              </div>
              <div className="likes">
                <IconButton aria-label="like" onClick={() => addLike(index)}>
                  <FavoriteOutlined />
                  {video.like}
                </IconButton>
              </div>
              <div className="description">{video.description}</div>
            </div>
            {playVideo === index && videoUrl && <VideoPlayer url={videoUrl} />}
          </Paper>
  )
}

export default Video