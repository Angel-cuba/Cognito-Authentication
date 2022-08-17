import { IconButton, Paper } from '@mui/material';
import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listVideos } from '../graphql/queries';
import { FavoriteOutlined, Pause, PlayArrow } from '@mui/icons-material';
import Baner from './Baner';
import { updateVideo } from '../graphql/mutations';

const Home = () => {
  const [videos, setVideos] = React.useState([]);
  const [playVideo, setPlayVideo] = React.useState('');
  console.log('videos', videos);
  const fetchVideo = async () => {
    try {
      const { data }: any = await API.graphql(graphqlOperation(listVideos));
      setVideos(data.listVideos.items);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchVideo();
  }, []);

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
    // const newVideos = videos.map((video) => {
    //   if (video.id === '1') {
    //     return { ...video, likes: video.likes + 1 };
    //   }
    //   return video;
    // }).sort((a, b) => b.likes - a.likes);
    // setVideos(newVideos);
  };
  const play = (index: any) => {
    if (playVideo === index) {
      setPlayVideo('');
      return;
    }
    setPlayVideo(index);
  };
  return (
    <div>
      <Baner />

      {!videos ? (
        <h1>No hay</h1>
      ) : (
        videos.map((video: any, index: any) => (
          <Paper key={video.id} variant="elevation" elevation={2} style={{ margin: '10px' }}>
            <div className="videoCard">
              <IconButton
                aria-label="play"
                onClick={() => play(index)}
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
          </Paper>
        ))
      )}
    </div>
  );
};

export default Home;
