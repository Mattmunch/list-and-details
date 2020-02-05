import { useState, useEffect } from 'react';
import { getCharacters } from '../components/services/getCharacters';



const useCharacters = () => {
  const [, setCurrentCharacters] = useState({});
  const [currentUrl] = useState('');

    
  useEffect(() => {
    getCharacters(currentUrl)
      .then(currentCharacters => setCurrentCharacters(currentCharacters));
  }, []);
};
export default useCharacters;
