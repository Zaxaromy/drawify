import React from 'react';

function HostPlayer() {
  return (
    <>
      <span className="host-content-outline" id="outline" />
      <div className="host-content-wrapper">
        <span className="pfp-outline">
          <img src="src/assets/icons/empty-user-icon.png" className="pfp" alt="pfp" />
        </span>
        <span className="username">User1949679</span>
        <img src="src/assets/icons/crown-nb.png" className="crown-icon" alt="crown" />
      </div>
    </>
  );
}

export default HostPlayer;
