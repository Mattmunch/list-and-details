import { useState, useEffect } from 'react';
import { getCharacters } from '../components/services/getCharacters';



const useCharacters = (url) => {
  const [currentCharacters, setCurrentCharacters] = useState({
    results:[]
  });
  useEffect(() => {
    getCharacters(url)
      .then(currentCharacters => setCurrentCharacters(currentCharacters));
  }, [url]);
  return currentCharacters;
};
export default useCharacters;
