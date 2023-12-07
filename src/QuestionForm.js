import React, { useState } from 'react';
import './QuestionFormStyles.css'; // Ensure this CSS file exists and is correctly referenced

function QuestionForm() {
    const [question, setQuestion] = useState('');
    // Placeholder state for results, assuming you will replace this with actual logic
    const [results, setResults] = useState(['Result 1', 'Result 2', 'Result 3', 'Result 4']);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(question);
        // Logic to handle question and set results
        setQuestion('');
    };

    return (
        <div className="question-form">
            <div className="left-section">
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter your question here"
                />
                <button onClick={handleSubmit}>Submit Question</button>
            </div>
            <div className="right-section">
                {results.map((result, index) => (
                    <div key={index}>{result}</div>
                ))}
            </div>
        </div>
    );
}

export default QuestionForm;
