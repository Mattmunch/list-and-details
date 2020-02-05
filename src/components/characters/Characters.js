import React, { useState } from 'react';
import useCharacters from '../../hooks/useCharacters';
import Pagination from '../Pagination';

const Characters = () => {
  const [currentUrl, setCurrentUrl] = useState('https://rickandmortyapi.com/api/character/?page=1');
  const characters = useCharacters(currentUrl);
  const characterElements = characters.results.map((character, i) => (
    <li key={i}>
      <h1>{character.name}</h1>
      <img src={character.image}/>
    </li>
  ));
  return (
    <>
      <ul>
        {characterElements}
      </ul>
      <Pagination characters={characters} setCurrentUrl={setCurrentUrl}/>   
    </>
  );
    
};
export default Characters;
