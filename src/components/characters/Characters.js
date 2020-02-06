import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Characters = ({ characters }) => {
  const characterElements = characters.results.map(character => (
      
    <li key={character.id}>
      <Link to={`/details/${character.id}`}>
        <h1>{character.name}</h1>
        <img src={character.image}/>
      </Link>
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
