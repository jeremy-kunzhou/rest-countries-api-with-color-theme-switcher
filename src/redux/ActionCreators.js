import * as ActionTypes from './ActionTypes';

export const postFeedback = (feedback) => (dispatch) => {
        
     console.log('Feedback', feedback); 
     alert('Thank you for your feedback!'); 
};

const fetchInformation = (url) => {
     return fetch(url)
     .then(response => {
          if (response.ok) {
               return response.json();
          } else {
               var errMessage = new Error();
               errMessage.message = `unable to get data from ${url}`;
               throw errMessage;
          }
     })
}

// let url = `https://restcountries.eu/rest/v2/regionalbloc/${region}?fields=name;capital;currencies;nativeName;topLevelDomain;population;region;subregion;languages;borders;flag`;

export const fetchCountries = () => (dispatch, store) => {
     let url = `https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag;alpha3Code`;
     dispatch(loadingCountries());
     return fetchInformation(url)
     .then(data => dispatch(loadCountries('all', data)))
     .catch(error => dispatch(loadCountriesError(error.message)))
}

export const fetchCountriesByRegion = (region) => (dispatch, store) => {
     let url = `https://restcountries.eu/rest/v2/region/${region}?fields=name;capital;population;region;flag;alpha3Code`;
     dispatch(loadingCountries());
     return fetchInformation(url)
     .then(data => dispatch(loadCountries(region, data)))
     .catch(error => dispatch(loadCountriesError(error.message)))
}


export const searchCountriesByName = (name) => (dispatch, store) => {
     let url = `https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;region;flag;alpha3Code`;
     dispatch(loadingCountries());
     return fetchInformation(url)
     .then(data => dispatch(loadCountries(`filtered by ${name}`, data)))
     .catch(error => dispatch(loadCountriesError(error.message)))
}

const loadingCountries = () => {
     return {
          type: ActionTypes.LOADING_COUNTRIES
     }
}

const loadCountries = (region, data) => {
     return {
          type: ActionTypes.LOAD_COUNTRIES,
          payload: {region, data}
     }
}

const loadCountriesError = (message) => (
     {
          type: ActionTypes.LOAD_COUNTRIES_ERROR,
          payload: message
     }
)

export const fetchCountryByCode = (code) => (dispatch, store) => {
     let url = `https://restcountries.eu/rest/v2/alpha?codes=${code}&fields=name;capital;currencies;nativeName;topLevelDomain;population;region;subregion;languages;borders;flag`
     dispatch(loadingCountry());
     return fetchInformation(url)
     .then(data => {
          data = data[0];
          if (data.borders.length > 0) {
               const bordersQuery = data.borders.join(';');
               let url = `https://restcountries.eu/rest/v2/alpha?codes=${bordersQuery}&fields=name`;
               fetchInformation(url)
               .then(info => {
                    data.borderList = info;
                    dispatch(loadCountry(data));
               })
          }
          else {
               data.borderList = [];
          }
          dispatch(loadCountry(data));

     })
     .catch(error => dispatch(loadCountryError(error.message)))
}

const loadingCountry = () => {
     return {
          type: ActionTypes.LOADING_COUNTRY
     }
}

const loadCountry = (data) => {
     return {
          type: ActionTypes.LOAD_COUNTRY,
          payload: data
     }
}

const loadCountryError = (message) => (
     {
          type: ActionTypes.LOAD_COUNTRY_ERROR,
          payload: message
     }
)
