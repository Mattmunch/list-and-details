import React, { useState } from 'react';
import Characters from '../components/characters/Characters';
import useCharacters from '../hooks/useCharacters';
import Pagination from '../components/Pagination';


const RickAndMorty = () => {
  const [currentUrl, setCurrentUrl] = useState('https://rickandmortyapi.com/api/character/?page=1');
  const characters = useCharacters(currentUrl);
  return (<>
    <Characters  characters={characters} setCurrentUrl={setCurrentUrl} />
    <Pagination characters={characters} setCurrentUrl={setCurrentUrl} />
  </>
  );
};
export default RickAndMorty;
