import React from 'react';

function Player() {
  return (
    <>
      <span className="player-content-outline" id="outline" />
      <div className="player-content-wrapper">
        <span className="pfp-outline">
          <img src="src/assets/icons/empty-user-icon.png" className="pfp" alt="pfp" />
        </span>
        <span className="username">User1949679</span>
      </div>
    </>
  );
}

export default Player;
