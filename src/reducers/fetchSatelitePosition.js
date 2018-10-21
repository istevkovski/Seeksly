// The reducer handles the data accordingly

export default (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_SATELITE_POSITION':
            return {
                gpsPosition: action.payload
            }
        default:
            return state
    }
}
