import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
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

function App() {
  const [players, setPlayer] = useState(data);
  return (
    <div className="App">
      <GlobalStyle />
      <h1>1996-1997 Stanley Cup Champion Detroit Red Wings</h1>
      <Form />
      <Team players={players} />
    </div>
  );
}

export default App;