// Get user location action handler

export const fetchLocation = () => dispatch => {
    dispatch({
        type: 'FETCH_LOCATION',
        payload: 'bg'
    })
}