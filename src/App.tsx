import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Initial from './components/Initial';
import Home from './components/Home';
import GoOut from './components/GoOut';
//Amplify 
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import '@aws-amplify/ui-react/styles.css'
Amplify.configure(awsExports);

function App() {
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
