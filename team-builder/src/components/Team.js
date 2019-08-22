import React from 'react';

import styled from 'styled-components';

import StyledH2 from './StyledH2';



const PlayerCard = styled.div`
  background-color: white;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
`;

const NumberStyles = styled.h3`
  color: #C8102E;
`;

export default function Team(props) {
  return (
    <div>
      <div>
      <StyledH2>Roster</StyledH2>
        {props.players.map(player => {
          return (
            <PlayerCard key={player.number}>
              <h3>#{player.number}</h3>
              <h4>{player.name}</h4>
              <h4>{player.position}</h4>
            </PlayerCard>
          )
        })}
      </div>
    </div>
  );
}