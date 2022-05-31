import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getRefs } from './getRefs';

const refs = getRefs();

const checkDataLength = data => {
  if (data.length > 10) {
    clearCountriesListMarkup();
    clearCountryCardMarkup();
    throw Error(
      Notify.info('Too many matches found. Please enter a more specific name.')
    );
  } else {
    return data;
  }
};

const createCardMarkup = data => {
  const { name, capital, population, flags, languages } = data[0];

  return `
  <div class="country-info__wrap">
    <img src="${flags.svg}" width="20px" height="20px" />
    <p class="country-info__name">${name.official}</p>
  </div>
    <ul class="country-info__list">
      <li class="country-info__item">
        <p class="country-info__content"><b>Capital: </b>${capital}</p>
      </li>
      <li class="country-info__item">
        <p class="country-info__content"><b>Population: </b>${population}</p>
      </li>
      <li class="country-info__item">
        <p class="country-info__content"><b>Languages: </b>${Object.values(
          languages
        ).join(', ')}</p>
      </li>
    </ul>
    `;
};

const createCountriesListMarkup = data => {
  return data
    .map(({ name, flags }) => {
      return `
<li class="country-list__item">
  <img src="${flags.svg}" width="20px" height="20px">
  <p class="country-list__name">${name.official}</p>
</li>
    `;
    })
    .join('');
};

const renderCountriesMarkup = data => {
  if (data.length === 1) {
    clearCountriesListMarkup();
    const markup = createCardMarkup(data);
    refs.countryInfo.innerHTML = markup;
  } else {
    clearCountryCardMarkup();
    const markup = createCountriesListMarkup(data);
    refs.countryList.innerHTML = markup;
  }
};

const clearCountriesListMarkup = () => {
  refs.countryList.innerHTML = '';
};

const clearCountryCardMarkup = () => {
  refs.countryInfo.innerHTML = '';
};

export {
  checkDataLength,
  createCardMarkup,
  createCountriesListMarkup,
  renderCountriesMarkup,
  clearCountriesListMarkup,
  clearCountryCardMarkup,
};
