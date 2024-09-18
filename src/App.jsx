import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatePollPage from './pages/CreatePollPage';
import PollDetailPage from './pages/PollDetailPage';
import './App.css';

const App = () => {
  const [polls, setPolls] = useState([]);

  const addPoll = (newPoll) => {
    setPolls([...polls, newPoll]);
  };

  const updatePollVotes = (updatedPoll) => {
    setPolls(polls.map(poll => poll.id === updatedPoll.id ? updatedPoll : poll));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage polls={polls} />} />
        <Route path="/create" element={<CreatePollPage addPoll={addPoll} />} />
        <Route path="/poll/:id" element={<PollDetailPage polls={polls} updatePollVotes={updatePollVotes} />} />
      </Routes>
    </Router>
  );
};

export default App;
