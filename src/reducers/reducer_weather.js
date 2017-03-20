import { FETCH_WEATHER } from '../actions/index';

// weather Reducer
export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			// return state.concat([action.payload.data])
			// spread that state into a new array!
			return [ action.payload.data, ...state ];
			console.log('Action received', action);
	}
	return state;
}