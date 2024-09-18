import React from 'react';
import PollCard from '../components/PollCard';

const HomePage = ({ polls }) => {
  return (
    <div className="home-page">
      <h2>Active Polls</h2>
      {polls.length === 0 ? (
        <p>No polls available. <strong>Create one!</strong></p>
      ) : (
        <div className="poll-list">
          {polls.map(poll => (
            <PollCard key={poll.id} poll={poll} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
