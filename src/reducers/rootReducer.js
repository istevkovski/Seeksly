// Import and manage all reducers here
import { combineReducers } from 'redux';

// Reducers import zone
import fetchLocation from './fetchLocation';
import fetchSatelitePosition from './fetchSatelitePosition';
import Actions from './Actions';


export default combineReducers({
    fetchLocation,
    fetchSatelitePosition,
    Actions
});