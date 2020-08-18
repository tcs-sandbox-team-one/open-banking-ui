import { SIGNIN_SUCCESS, SIGNIN_STARTED, SIGNIN_ERROR } from '../actions/authentication/type';

const defaultState = {
    userInfo: {},
	isLoading: false,
	isError: false,
	error: ''
};

const AUTHENTICATIONsReducer = (state = JSON.parse(JSON.stringify(defaultState)), action) => {
	switch (action.type) {
        case SIGNIN_STARTED:
            return {
                ...state,
                isLoading: true,
            };
        case SIGNIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload
            };
        case SIGNIN_ERROR:
            return {
                ...state,
                isError: true,
                error: action.payload
            };
		default:
			return state;
	}
};

export default AUTHENTICATIONsReducer;