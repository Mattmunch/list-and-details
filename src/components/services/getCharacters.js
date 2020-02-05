export const getCharacters = url => {
  return fetch(`${url}`)
    .then(res => {
      console.log(res);
      return res.json();
    });
};
  
