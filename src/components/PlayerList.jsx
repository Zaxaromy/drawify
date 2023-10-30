import React from 'react';
import Player from './Player';
import HostPlayer from './HostPlayer';
import EmptyPlayer from './EmptyPlayer';

function PlayerList() {
  return (
    <div className="player-list-wrapper">
      <HostPlayer />
      <Player />
      <EmptyPlayer />
    </div>
  );
}

export default PlayerList;
