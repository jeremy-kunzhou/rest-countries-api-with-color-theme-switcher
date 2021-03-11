import * as ActionTypes from './ActionTypes';

const Country = (state = {
    is_loading: true,
    errMessage: null,
    country: null
}, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_COUNTRY:
            return {
                ...state,
                is_loading: false,
                country: action.payload,
            }

        case ActionTypes.LOAD_COUNTRY_ERROR:
            return {
                ...state,
                is_loading: false,
                country: null,
                error: action.payload
            }

        case ActionTypes.LOADING_COUNTRY:
            return {
                ...state,
                is_loading: true,
                error: null,
            }
    
        default:
            return state;
    }
}

export default Country;