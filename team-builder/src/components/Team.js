import React from 'react';

import styled from 'styled-components';

import StyledH2 from './StyledH2';

const PlayerCard = styled.div`
  background-color: white;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  width: 175px;
  h3 {
    font-size: 22px;
    color: #C8102E;
  }
  h4 {
    font-size: 18px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Team(props) {
  return (
    <div>
      <StyledH2>Roster</StyledH2>
        <CardsWrapper>
        {props.players.map(player => {
          return (
            <PlayerCard key={player.number}>
              <h3>#{player.number}</h3>
              <h4>{player.name}</h4>
              <h4>{player.position}</h4>
            </PlayerCard>
          )
        })}
        </CardsWrapper>
    </div>
  );
}