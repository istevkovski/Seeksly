// Import and manage all reducers here
import { combineReducers } from 'redux';

// Reducers import zone
import fetchLocation from './fetchLocation';
import fetchSatelitePosition from './fetchSatelitePosition';
import updateSearchTerm from './updateSearchTerm';
import searchAutocomplete from './searchAutocomplete';
import backgroundReady from './backgroundReady';
import Actions from './Actions';


export default combineReducers({
    fetchLocation,
    fetchSatelitePosition,
    updateSearchTerm,
    searchAutocomplete,
    backgroundReady,
    Actions
});