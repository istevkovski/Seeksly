// The reducer handles the data accordingly

export default (state = {}, action) => {
    switch(action.type) {
        case 'SAVE_AVG_COLOR':
            return {
                rBckgAvgColor: action.payload.hex,
                rBckgIsDark: action.payload.isDark
            }
        default:
            return state
    }
}