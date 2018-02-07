import initState from './init_state';
import { SAVE_TO_STORE, SAVE_LONG_LAT } from '../actions/index.js';
//action and reducer interaction for updating the state
export default function(state=initState, action = {}) {
  let newState = state;
  switch(action.type) {
    case SAVE_TO_STORE : {
		  newState = { ...state };
      newState.apiResult = [ ...action.payload.value ];
		  break;
		}
    case SAVE_LONG_LAT : {
      var {current_place, latitude, longitude} = action.payload;
		  newState = { ...state };
      newState.currentLocation.selected = current_place;
      newState.currentLocation.latitude = latitude;
      newState.currentLocation.longitude = longitude;
		  break;
		}
		default:
		break;
  }
	return newState;
}
