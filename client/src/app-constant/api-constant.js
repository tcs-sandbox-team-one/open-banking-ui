const baseURL = 'http://localhost:2010';

const apiConstant = {
    headerOptions: {
        OptionContentTypeJSON: {
            headers: { "Content-Type": "application/json" }
        },
        OptionAccept: {
            headers: { "Accept": "application/json" }
        },
        OptionContentTypeFormData: {
            headers: { "Content-Type": "multipart/form-data" }
        }
    },
    endPoint: {
        'SIGN_IN': {
            url: `${baseURL}/login`,
            type: 'get',
            headerType: 'OptionContentTypeJSON'
        }
    }
};
module.exports = apiConstant;