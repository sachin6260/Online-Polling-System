import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import ResultChart from '../components/ResultChart';

const PollDetailPage = ({ polls, updatePollVotes }) => {
  const { id } = useParams();
  const poll = polls.find(p => p.id === parseInt(id));

  if (!poll) return <h2>Poll not found!</h2>;

  const handleVote = (index) => {
    const updatedPoll = { ...poll };
    updatedPoll.options[index].votes += 1;
    updatePollVotes(updatedPoll);
  };

  return (
    <div className="poll-detail-page">
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map((option, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={faCheckCircle} /> {option.text} - {option.votes} votes
            <button onClick={() => handleVote(index)}>
              <FontAwesomeIcon icon={faVoteYea} /> Vote
            </button>
          </li>
        ))}
      </ul>
      <h3>Live Results:</h3>
      <ResultChart options={poll.options} />
    </div>
  );
};

export default PollDetailPage;
