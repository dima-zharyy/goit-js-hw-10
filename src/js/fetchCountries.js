import { Notify } from 'notiflix';

const filterOptions = ['name', 'capital', 'population', 'flags', 'languages'];
const url = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = function (name) {
  return fetch(`${url}${name}?fields=${filterOptions}`).then(response => {
    if (response.status === 404) {
      throw Error(Notify.failure('Oops, there is no country with that name'));
    } else {
      return response.json();
    }
  });
};
