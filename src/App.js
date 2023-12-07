import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatInputBox from './ChatInputBox';
import './App.css';
import '@patternfly/react-core/dist/styles/base.css';

function App() {
  // Define initial dummy data for each field
  const initialFormData = {
    'Name': 'John Doe',
    'DOB': '01/01/1990',
    'Phone': '123-456-7890',
    'Address': '123 Main St, Anytown, USA',
    'Email': 'johndoe@example.com',
    'Emergency Contact': 'Jane Doe',
    'Insurance Provider': 'Insurance Co',
    'Occupation': 'Software Developer',
    'Employer': 'Tech Inc.',
    'Blood Type': 'O+',
    'Surgery': 'Appendectomy',
    'Allergy': 'Peanuts',
    'Medication': 'Ibuprofen',
    'Medical Condition': 'N/A',
    'SSN': '123-45-6789',
    'Signature': 'John Doe',
  };

  const [formData, setFormData] = useState(initialFormData);

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
