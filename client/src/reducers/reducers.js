import { combineReducers } from 'redux';
import authentication from "./authentication-reducer";

export default function getRootReducer() {
	return combineReducers({
		authentication
	});
}