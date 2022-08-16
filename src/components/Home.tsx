import { IconButton, Paper } from '@mui/material';
import React from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listVideos } from '../graphql/queries';
import { FavoriteOutlined, PlayArrow } from '@mui/icons-material';
import {useStyles} from './styles'

const Home = () => {
  const [videos, setVideos] = React.useState([]);
  console.log('videos', videos);
  const styles= useStyles()
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
  return (
    <div>
      <div className={styles.header}>
        <button onClick={() => Auth.signOut()}>Go to Out</button>
        <h2>Content</h2>
      </div>
      {!videos ? (
        <h1>No hay</h1>
      ) : (
        videos.map((video: any) => (
          <Paper key={video.id} variant="elevation" elevation={2}>
            <div className="videoCard">
              <IconButton aria-label="delete">
                <PlayArrow />
              </IconButton>
              <div className="">
                <div className="videoName">{video.name}</div>
                <div className="author">{video.author}</div>
              </div>
              <div className="likes">
                <IconButton aria-label="like">
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
