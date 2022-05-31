const filterOptions = ['name', 'capital', 'population', 'flags', 'languages'];
const url = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = function (name) {
  return fetch(`${url}${name}?fields=${filterOptions}`).then(response =>
    response.json()
  );
};
