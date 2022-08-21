import { IconButton} from '@mui/material';
import React from 'react';
import { API, graphqlOperation} from 'aws-amplify';
import { listVideos } from '../graphql/queries';
import { Add} from '@mui/icons-material';
import Baner from './Baner';
import VideosList from './VideosList';
import AddingIcons from './AddingIcons';

const Home = () => {
  const [videos, setVideos] = React.useState([]);
 
  const [addVideo, setAddVideo] = React.useState(false);
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

 

  return (
    <div>
      <Baner />

      {!videos ? (
        <h1>No hay</h1>
      ) : (
        videos.map((video: any, index: any) => (
          <VideosList key={index} video={video} index={index} videos={videos} setVideos={setVideos}/>
        ))
      )}
      {addVideo ? (
        <AddingIcons
          onUpload={() => {
            setAddVideo(false);
            fetchVideo();
          }}
        />
      ) : (
        <IconButton  onClick={() => setAddVideo(true)} >
          <Add/>
        </IconButton>
      )}
    </div>
  );
};

export default Home;
