// Get user location action handler

export const getAvgColor = (color) => dispatch => {
    dispatch({
        type: 'SAVE_AVG_COLOR',
        payload: color
    })
};

export const backgroundReady = (bool) => dispatch => {
    dispatch({
        type: 'BACKGROUND_LOADED',
        payload: bool
    })
};

export const fetchLocation = (position) => dispatch => {
    dispatch({
        type: 'FETCH_LOCATION',
        payload: position
    })
}

export const fetchSatelitePosition = (gps) => dispatch => {
    dispatch({
        type: 'FETCH_SATELITE_POSITION',
        payload: gps
    })
}

export const updateSearchTerm = (term) => dispatch => {
    dispatch({
        type: 'UPDATE_SEARCH_TERM',
        payload: term
    })
}

export const searchAutocomplete = (array) => dispatch => {
    dispatch({
        type: 'SAVE_SEARCH_AUTOCOMPLETE',
        payload: array
    })
}