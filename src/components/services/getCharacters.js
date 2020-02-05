export const getCharacters = url => {
  return fetch(`${url}`)
    .then(res => res.json());
};
  
