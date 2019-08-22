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

  const editPlayer = (player) => {
    setMemberToEdit(player);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <StyledH1>1996-1997 Stanley Cup Champion Detroit Red Wings</StyledH1>
      <Form addNewPlayer={addNewPlayer} memberToEdit={memberToEdit} />
      <Team players={players} editPlayer={editPlayer}/>
    </div>
  );
}

export default App;