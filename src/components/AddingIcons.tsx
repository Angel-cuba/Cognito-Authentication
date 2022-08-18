import { TextField } from '@aws-amplify/ui-react';
import { Publish } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

type DataType = {
  title: string,
  description: string,
  author: string,
}

const AddingIcons = ({ onUpload }: any) => {
  const [file, setFile] = React.useState<DataType>({
    title: '',
    description: '',
    author: '',
  });
console.log('file', file);
  const sendVideo = () => {
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
      <IconButton onClick={sendVideo}>
        <Publish />
      </IconButton>
    </div>
  );
};

export default AddingIcons;
