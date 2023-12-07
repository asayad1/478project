import React, { useState } from 'react';
import BarGraph from './BarGraph';
import './ChatInputBox.css'; // Importing the CSS file for styling

const ChatInputBox = ({ formData, onSend }) => {
    const [inputText, setInputText] = useState('');
    const [apiResponse, setApiResponse] = useState([]); // State for API response data
    const [promptText, setPromptText] = useState(''); // State for the prompt
    const [predictedClass, setPredictedClass] = useState(''); // State for the predicted class
    


    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/Pranavsenthilvel/classification-4-kfold-V1",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendClick = () => {
        query(inputText).then((response) => {
            setApiResponse(response); // Store the API response
            const predictedClass = JSON.stringify(response[0][0]["label"])
            setPromptText(inputText);
            setPredictedClass(predictedClass);
            console.log(JSON.stringify(response[0]));
        });

        setInputText(''); // Clear the text area after sending
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent the newline character from being inserted
            handleSendClick(); // Trigger the send action
        }
    };

    return (
        <div>
            <div className='response-modal'>
                <h1>Prompt: <h3>{promptText}</h3></h1>
                <h1>Response: <h3>{formData[predictedClass.slice(1, -1)]}</h3></h1>   
                <h1>Predicted Class: <h3>{predictedClass}</h3></h1>
                <h1>Predicted Class Scores: </h1>
                <div className="graph">
                    {predictedClass && <BarGraph data={apiResponse} />}
                </div>
            </div>

            <div className="chat-input-box">
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} // Add this event handler
                    placeholder="Ask your question here..."
                />
                <button onClick={handleSendClick}>Send</button>
            </div>
        </div>
    );
};

export default ChatInputBox;
