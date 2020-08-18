import { doSigninSuccess, doSigninStarted, doSigninError } from "./authentication";
import Services from "../../services";
//import { history } from '../../history';

export const doSignin = (loginData) => {
  
    return function doSigninAction(dispatch) {
        dispatch(doSigninStarted());
        return Services.APICallConfig.callAPIService('SIGN_IN',loginData)
        .then(response => {
            dispatch(doSigninSuccess(response));
        })
        .catch(error => {
            console.log("error response", error);
            dispatch(doSigninError(error));
        })
    }
}