import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const CreatePollPage = ({ addPoll }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const navigate = useNavigate();

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || options.some(option => option.trim() === '')) {
      alert('Please fill in the question and all options.');
      return;
    }

    const newPoll = {
      id: Date.now(),
      question,
      options: options.map(option => ({ text: option, votes: 0 })),
    };

    addPoll(newPoll);
    navigate('/');
  };

  return (
    <div className="create-poll-page">
      <h2>Create a New Poll</h2>
      <form onSubmit={handleSubmit}>
        <label>Poll Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <label>Poll Options:</label>
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            required
          />
        ))}
        <button type="button" onClick={handleAddOption}>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Another Option
        </button>
        <button type="submit">Create Poll</button>
      </form>
    </div>
  );
};

export default CreatePollPage;
