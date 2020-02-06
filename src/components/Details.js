import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharacters } from '../components/services/getCharacters';

const Details = ({ match }) => {
  const url = `https://rickandmortyapi.com/api/character/${match.params.id}`;
  const [currentCharacter, setCurrentCharacter] = useState({
    origin: {
      name: ''
    },
    location: {
      name:''
    }
  });
    
  useEffect(() => {
    getCharacters(url)
      .then(character => {
        setCurrentCharacter(character);
      });
  }, []);
    
  return (
    <section>
      <p>Name:{currentCharacter.name}</p>
      <p>Species:{currentCharacter.species}</p>
      <p>Origin:{currentCharacter.origin.name}</p>
      <p>Status:{currentCharacter.status}</p>
      <p>Location:{currentCharacter.location.name}</p>
    </section>
  );

};
Details.propTypes = {
  match: PropTypes.object.isRequired
};
export default Details;
