import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	libraries: LibraryReducer, //console.log(store.getState()) ==> { libraries: [ {id: 1, title:'webpack', ...} ] }
	selectedLibraryId: SelectionReducer
});

