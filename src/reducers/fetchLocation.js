// The reducer handles the data accordingly

export default (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_LOCATION':
            return {
                locationInfo: action.payload
            }
        default:
            return state
    }
}