import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Auth } from './auth';
import { Countries } from './countries';
import Country from './country';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            countries: Countries,
            country: Country,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}