import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { getRefs } from './js/getRefs';
import * as API from './js/additional-api';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  if (!event.target.value.trim()) {
    return;
  }

  const userInput = event.target.value.trim();

  fetchCountries(userInput)
    .then(API.checkDataLength)
    .then(API.renderCountriesMarkup)
    .catch(error => {
      API.clearCountryCardMarkup();
      API.clearCountriesListMarkup();
    });
}
