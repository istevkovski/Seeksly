// Reducer to handle the search autocomplete data

export default (state = {
    autocompleteDataArray: []
}, action) => {
    switch(action.type){
        case 'SAVE_SEARCH_AUTOCOMPLETE':
            return {
                autocompleteDataArray: action.payload
            }
        default:
            return state
    }
}