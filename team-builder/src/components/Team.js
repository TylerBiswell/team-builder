import React from 'react';

import styled from 'styled-components';

import StyledH2 from './StyledH2';

const PlayerCard = styled.div`
  background-color: white;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 28px;
    color: #C8102E;
  }
  h4 {
    font-size: 18px;
    padding-bottom: 5px;
    border-bottom: 2px solid #C8102E;
  }
  p {
    font-size: 18px;
    margin-top: 10px;
  }
  button {
    width: 50%;
    margin: 20px 0 5px 0;
    align-self: center;
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
      <StyledH2>Players:</StyledH2>
        <CardsWrapper>
        {props.players.map(player => {
          return (
            <PlayerCard key={player.number}>
              <h3>#{player.number}</h3>
              <h4>{player.name}</h4>
              <p>{player.position}</p>
              <button onClick={() => props.selectPlayer(player)}>Edit player</button>
            </PlayerCard>
          )
        })}
        </CardsWrapper>
    </div>
  );
}