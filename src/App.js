import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatInputBox from './ChatInputBox';
import './App.css';
import '@patternfly/react-core/dist/styles/base.css';

function App() {
  const [formData, setFormData] = useState({});

  const updateFormData = (newData) => {
    setFormData(newData);
  };

  return (
    <div>
      <ChatSidebar formData={formData} updateFormData={updateFormData} />
      <ChatInputBox formData={formData} />
    </div>
  );
}

export default App;
