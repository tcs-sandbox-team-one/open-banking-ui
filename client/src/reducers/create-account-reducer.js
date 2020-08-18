import { 
        CREATE_ACCOUNT_STARTED,
        CREATE_ACCOUNT_SUCCESS,
        CREATE_ACCOUNT_ERROR} from '../actions/create-account/type';

const defaultState = {
    createAccountData: [],
    isLoading: false,
	isError: false,
	error: ''
};

const CreateAccountReducer = (state = JSON.parse(JSON.stringify(defaultState)), action) => {
	switch (action.type) {
        case CREATE_ACCOUNT_STARTED:     
            return {
                ...state,
                isLoading: true,
            };
        case CREATE_ACCOUNT_ERROR: 
            return {
                ...state,
                error: action.payload
            };
        case CREATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                createAccountData: [...state.createAccountData, action.payload]
            };
		default:
			return state;
	}
};

export default CreateAccountReducer;