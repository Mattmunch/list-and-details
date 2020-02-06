import React from 'react';
import PropTypes from 'prop-types';


const Pagination = ({ characters, setCurrentUrl }) =>(
  <>
    <button onClick={() => setCurrentUrl(characters.info.prev)}>⬅️</button>
    <button onClick={() => setCurrentUrl(characters.info.next)}>➡️</button>
  </>
);

Pagination.propTypes = {
  characters: PropTypes.object.isRequired,
  setCurrentUrl: PropTypes.func.isRequired
};

export default Pagination;
