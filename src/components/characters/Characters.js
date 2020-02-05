import React from 'react';
import PropTypes from 'prop-types';


const Characters = ({ characters }) => {
  const characterElements = characters.results.map((character, i) => (
    <li key={i}>
      <h1>{character.name}</h1>
      <img src={character.image}/>
    </li>
  ));
  return (
    <ul>
      {characterElements}
    </ul>   
  );
    
};
Characters.propTypes = {
  characters: PropTypes.object.isRequired,
};
export default Characters;
