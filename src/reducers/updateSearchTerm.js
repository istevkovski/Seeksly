// The reducer handles the data accordingly

export default (state = {
    searchTerm: ''
}, action) => {
    switch(action.type) {
        case 'UPDATE_SEARCH_TERM':
            return {
                searchTerm: action.payload
            }
        default:
            return state
    }
}
