import { 
    CREATE_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_STARTED,
    CREATE_ACCOUNT_ERROR
} from './type';

export const doCreateAccountSuccess = accountInfo => {
    return {
        type: CREATE_ACCOUNT_SUCCESS,
        payload: accountInfo
    }
};
  
export const doCreateAccountStarted = () => {
    return {
        type: CREATE_ACCOUNT_STARTED
    }
};
  
export const doCreateAccountError = error => {
    return {
        type: CREATE_ACCOUNT_ERROR,
        payload: error
    }
};


