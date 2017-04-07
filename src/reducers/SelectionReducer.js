export default (state=null, action) => {	
	// console.log('SELECTIONREDUCERS: ' + JSON.stringify(action));
	switch(action.type){
		case 'select_library':
			return action.payload
		default:
			return state;
	}
}