import React from 'react';
import Player from './Player';
import Host from './Host';
import EmptyPlayer from './EmptyPlayer';

function PlayerList() {
  return (
    <div className="player-list-wrapper">
      <div className="player-list-content">
        <div className="host-title-wrapper">
          <span className="host-title">Host</span>
        </div>
        <Host />
        <div className="players-title-wrapper">
          <span className="players-title">Players</span>
        </div>
        <Player />
        <EmptyPlayer />
        <EmptyPlayer />
        <EmptyPlayer />
        <EmptyPlayer />
        <EmptyPlayer />
        <EmptyPlayer />
        <EmptyPlayer />
        <EmptyPlayer />
        <EmptyPlayer />
      </div>
    </div>
  );
}

export default PlayerList;
