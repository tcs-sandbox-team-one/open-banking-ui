import { 
   SIGNIN_SUCCESS,
   SIGNIN_STARTED,
   SIGNIN_ERROR
} from './type';

export const doSigninSuccess = userInfo => {
    return {
        type: SIGNIN_SUCCESS,
        payload: userInfo
    }
};
  
export const doSigninStarted = () => {
    return {
        type: SIGNIN_STARTED
    }
};
  
export const doSigninError = error => {
    return {
        type: SIGNIN_ERROR,
        payload: error
    }
};


