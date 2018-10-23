// The reducer handles the data accordingly

export default (state = {
    backgroundLoaded: false
}, action) => {
    switch(action.type) {
        case 'BACKGROUND_LOADED':
            return {
                backgroundLoaded: action.payload
            }
        default:
            return state
    }
}
