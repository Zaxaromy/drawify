import React from 'react';

function EmptyPlayer() {
  return (
    <div className="empty-player-wrapper">
      <span className="pfp-outline">
        <img src="src/assets/icons/empty-user-icon.png" className="pfp" alt="pfp" />
      </span>
      <span className="username">Empty</span>
    </div>
  );
}

export default EmptyPlayer;
