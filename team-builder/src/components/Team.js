import React from 'react';

export default function Team(props) {
  return (
    <div>
      <div>
        <h2>Roster</h2>
        {props.players.map(player => {
          return (
            <div key={player.number}>
              <h3>#{player.number}</h3>
              <h4>{player.name}</h4>
              <h4>{player.position}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}