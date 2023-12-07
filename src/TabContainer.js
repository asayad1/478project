import React, { useState } from 'react';
import MedicalForm from './MedicalForm'; // Assuming MedicalForm is in the same directory
import QuestionForm from './QuestionForm'; // Adjust path as necessary
import './headerStyles.css'; // Adjust the path as necessary

function TabContainer() {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div> 
            <div className='header'>
                <div className='header-title'>
                    <h1> Test </h1>
                </div>

                <div className='header-buttons'> 
                    <button onClick={() => setActiveTab('tab1')}>Medical Form</button>
                    <button onClick={() => setActiveTab('tab2')}>Questions</button>
                </div>
            </div>
            <div>
                {activeTab === 'tab1' && <MedicalForm />}
                {activeTab === 'tab2' && <QuestionForm />}
            </div>
        </div>
    );
}

export default TabContainer;