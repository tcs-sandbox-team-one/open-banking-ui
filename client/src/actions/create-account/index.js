import { doCreateAccountSuccess, doCreateAccountStarted, doCreateAccountError } from "./create-account";
import Services from "../../services";

export const createAccount = (accountData) => dispatch => {
    dispatch(doCreateAccountStarted());
    Services.APICallConfig.callAPIService('CREATE_ACCOUNT',accountData)
    .then(response => {
        dispatch(doCreateAccountSuccess(response));
    }) 
    .catch(error => {
        dispatch(doCreateAccountError(error));
    });
}