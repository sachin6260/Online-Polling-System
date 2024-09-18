import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';

const PollCard = ({ poll }) => {
  return (
    <div className="poll-card">
      <h3>{poll.question}</h3>
      <p>Options: {poll.options.length}</p>
      <Link to={`/poll/${poll.id}`}>
        <button>
          <FontAwesomeIcon icon={faVoteYea} /> Vote Now
        </button>
      </Link>
    </div>
  );
};

export default PollCard;
