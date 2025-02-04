import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import StyledH2 from './StyledH2';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width 30%;
  margin: 20px auto;
  label {
    color: white;
    font-weight: bold;
    font-size: 22px;
    text-transform: uppercase;
  }
  input {
    padding: 10px;
  }
  button {
    width: 30%;
    margin: 0 auto;
    padding: 10px;
  }
`;

export default function Form(props) {
  const [player, setPlayer] = useState({ name: '', number: '', position: ''})

  const handleChange = e => 
    setPlayer({ ...player, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    const isEmpty = obj => {
        for (let key in obj) {
          if (obj.hasOwnProperty(key))
            return false;
        }
        return true;
      }
  
      if (!isEmpty(props.memberToEdit)) {
        const playerToEdit = { ...player, id: props.memberToEdit.id };
        props.editMember(playerToEdit);
        props.setMemberToEdit({});
      } else {
        const newPlayer = { ...player, id: Date.now() };
        props.addNewPlayer(newPlayer);
      }
    setPlayer({ name: '', number: '', position: ''});
  };

  useEffect(() => {
    setPlayer({ name: props.memberToEdit.name, number: props.memberToEdit.number, position: props.memberToEdit.position })
  }, [props.memberToEdit]);

  return (
    <div>
      <StyledH2>Add/edit a Player:</StyledH2>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input 
          type='text' 
          name='name' 
          placeholder='Player name here...' 
          value={player.name} 
          onChange={handleChange} 
        />
        <br />
        <label htmlFor='number'>Number:</label>
        <input 
          type='text' 
          name='number' 
          placeholder='Player number here...' 
          value={player.number} 
          onChange={handleChange} 
        />
        <br />
        <label htmlFor='name'>Position:</label>
        <input 
          type='text' 
          name='position' 
          placeholder='Player position here...' 
          value={player.position} 
          onChange={handleChange} 
        />
        <br />
        <button type='submit'>Add/edit player!</button>
      </StyledForm>
    </div>
  )
} 