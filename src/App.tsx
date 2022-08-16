import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Initial from './components/Initial';
import Home from './components/Home';
import GoOut from './components/GoOut';
//Amplify
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
//GraphQL Operation
import { listVideos } from './graphql/queries';


//Initialization of Amplify
Amplify.configure(awsExports);

function App() {
  const [videos, setVideos] = React.useState([]);
  console.log('videos',videos);
  const fetchVideo = async () => {
    try {
      const videoData: any = await API.graphql(graphqlOperation(listVideos));

      // const list = videoData.listVideos.Items 
      // console.log('Videos',videoData.data.listVideos.Items);
      setVideos(videoData.data.listVideos.Items);
    } catch (error) {
      console.log(error);
    }
  };
React.useEffect(() => {
  fetchVideo();
} , []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/out" element={<GoOut />} />
        {/* <Route path="/" element={<Initial />} /> */}
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
