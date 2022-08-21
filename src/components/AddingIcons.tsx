import { TextField } from '@aws-amplify/ui-react';
import UploadIcon from '@mui/icons-material/Upload';
import { IconButton } from '@mui/material';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import React from 'react';
import { createVideo } from '../graphql/mutations';

type DataType = {
  // video(arg0: string, video: any, arg2: { contentType: string; }): { key: any; } | PromiseLike<{ key: any; }>;
  title: string;
  description: string;
  author: string;
};

const AddingIcons = ({ onUpload }: any) => {
  const [file, setFile] = React.useState<DataType>({
    title: '',
    description: '',
    author: '',
  });
  const [videoData, setVideoData] = React.useState();
  const [videoUrl, setVideoUrl] = React.useState('');
  console.log('videoUrl', videoUrl);

  React.useEffect(() => {
    const example = async () =>
      await Storage.put(`${uuid()}.mp4`, videoData, {
        contentType: 'video/mp4',
      })
        .then((result) => {
          setVideoUrl(result.key);
        })
        .catch((error) => {
          console.log('error', error);
        });
    example();
  }, [videoData]);
  const sendVideo = async () => {
    const createVideoInput = {
      id: uuid(),
      name: file.title,
      description: file.description,
      author: file.author,
      url: videoUrl,
      like: 0,
    };
    await API.graphql(graphqlOperation(createVideo, { input: createVideoInput }));
    onUpload();
  };

  return (
    <div>
      <h2>Adding Video</h2>
      <TextField
        label="Title"
        value={file.title}
        onChange={(e: any) => setFile({ ...file, title: e.target.value })}
      />
      <TextField
        label="Author"
        value={file.author}
        onChange={(e: any) => setFile({ ...file, author: e.target.value })}
      />
      <TextField
        label="Description"
        value={file.description}
        onChange={(e: any) => setFile({ ...file, description: e.target.value })}
      />
      <input type="file" accept="video/*" onChange={(e: any) => setVideoData(e.target.value)} />
      <IconButton onClick={sendVideo}>
        <UploadIcon />
      </IconButton>
    </div>
  );
};

export default AddingIcons;
