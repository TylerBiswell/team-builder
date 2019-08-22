import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// import './App.css';

import data from './data';
import Form from './components/Form';
import Team from './components/Team';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
  }
  html {
    background-color: #C8102E;
  }
`;

const StyledH1 = styled.h1`
  color: white;
  margin: 20px;
  text-align: center;
`;

function App() {
  const [players, setPlayers] = useState(data);
  const [memberToEdit, setMemberToEdit] = useState({});

  const addNewPlayer = player => {
    setPlayers([ ...players, player ]);
  };

  const selectPlayer = (player) => {
    setMemberToEdit(player);
        // console.log(player);
  };

  const editMember = (player) => {
    console.log(player);
    console.log(players);
    const newArray = players.map(element => {
      if (element.id === player.id) {
        console.log(player.id);
        console.log(element);
        element = { ...player };
        console.log(element);
      }
    });
    console.log(newArray)
    // setPlayers(newArray);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <StyledH1>Detroit Red Wings</StyledH1>
      <Form addNewPlayer={addNewPlayer} memberToEdit={memberToEdit} editMember={editMember} setMemberToEdit={setMemberToEdit} />
      <Team players={players} selectPlayer={selectPlayer}/>
    </div>
  );
}

export default App;