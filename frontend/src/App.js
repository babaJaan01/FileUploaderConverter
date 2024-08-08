import './App.scss';
import React from 'react';
import FileUpload from './components/fileUpload';
import MouseAura from './components/Mouse/MouseAura';

const App = () => {
  return (
    <>
    <MouseAura />
    <div>
      <h1>File Uploader and Conversion</h1>
      <FileUpload />
    </div>
    </>
  );
};

export default App;