// Get user location action handler

export const getAvgColor = (color) => dispatch => {
    dispatch({
        type: 'SAVE_AVG_COLOR',
        payload: color
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