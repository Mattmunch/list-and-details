export const getCharacters = url => {
  return fetch(`${url}`)
    .then(res => {
      return res.json();
    });
};
  
