// HelpPage.jsx
import React, { useState } from 'react';

function HelpPage() {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    
    console.log('Submitted question:', question);
   
  };

  return (
    <div>
      <h1>Help Page</h1>
      <p>Feel free to ask your question below:</p>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your question here..."
        value={question}
        onChange={handleQuestionChange}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit Question</button>
    </div>
  );
}

export default HelpPage;
