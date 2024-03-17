import React, { useState } from 'react';
import './index.css';
import Feedback from './components/Feedback/Feedback';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleButtonClick = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };
  return (
    <>
      <Feedback feedback={feedback} onFeedbackChange={handleButtonClick} />
    </>
  );
};

export default App;
