import React, { useState } from 'react';
import './ChatSidebar.css'; // Importing the CSS file for styling
import ContactCard from './ContactCard';
import ahmad from "./ahmad.png";
import pranav from "./pranav.png"

const fields = [
    'Name',
    'DOB',
    'Phone',
    'Address',
    'Email',
    'Emergency Contact',
    'Insurance Provider',
    'Occupation',
    'Employer',
    'Blood Type',
    'Surgery',
  'Allergy',
  'Medication',
  'Medical Condition',
  'SSN',
  'Signature',
];

const ChatSidebar = ({ formData, updateFormData }) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        updateFormData({
          ...formData,
          [name]: value,
        });
      };


  const handleSaveClick = () => {
    // You can access the saved form data in the formData object
    console.log(formData);
    // Add your save logic here
  };

  return (
    <div className="chat-sidebar">
      {/* Add sidebar contents here */}
          <ContactCard imageUrl={ahmad} name="Ahmad Sayad" />
        <ContactCard imageUrl={pranav} name="Pranav Senthilvel" />
        <h1 className='prompt-patient-info'> Enter Patient Information: </h1>
      <ul className="menu-items">
        {fields.map((field) => (
          <li key={field}>
            <h1>{field}</h1>
            <input className='input-field'
              type="text"
              id={field}
              name={field}
              placeholder={`Enter your ${field.toLowerCase()}`}
              onChange={handleInputChange}
            />
          </li>
        ))}
        <button className="button" onClick={handleSaveClick}>Save</button>
      </ul>
    </div>
  );
};

export default ChatSidebar;
