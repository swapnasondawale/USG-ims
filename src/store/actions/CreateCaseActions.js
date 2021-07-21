import * as types from '../actionTypes/CreateCaseActionsTypes';
import URL from '../../constants/AppConstants';
import axios from 'axios';


let configuration = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

export function getDivisionSuccess(result) {
    return {
        type: types.GET_CREATE_CASE_DIVISION_SUCCESS,
        payload: result
    }
}

export function getOrderBySuccess(result) {
    return {
        type: types.GET_CREATE_CASE_ORDER_BY_SUCCESS,
        payload: result
    }
}

export function getSecondarySuccess(result) {
    return {
        type: types.GET_CREATE_CASE_SECONDARY_SUCCESS,
        payload: result
    }
}

export function getCaseTypeSuccess(result) {
    return {
        type: types.GET_CREATE_CASE_CASE_TYPE_SUCCESS,
        payload: result
    }
}

export function getCarrierSuccess(result) {
    return {
        type: types.GET_CREATE_CASE_CARRIER_SUCCESS,
        payload: result
    }
}

export function getCoverageSuccess(result) {
    return {
        type: types.GET_CREATE_CASE_COVERAGE_SUCCESS,
        payload: result
    }
}

export function getCasePrioritySuccess(result) {
    return {
        type: types.GET_CREATE_CASE_CASE_PRIORITY_SUCCESS,
        payload: result
    }
}

export function getBillTypeSuccess(result) {
    return {
        type: types.GET_CREATE_CASE_BILL_TYPE_SUCCESS,
        payload: result
    }
}

export function getFormTypeSuccess(result) {
    return {
        type: types.GET_CREATE_CASE_FORM_TYPE_SUCCESS,
        payload: result
    }
}

export function getPolicyTypeSuccess(result) {
    return {
        type: types.GET_CREATE_CASE_POLICY_TYPE_SUCCESS,
        payload: result
    }
}

export function getPolicySubTypeSuccess(result) {
    return {
        type: types.GET_CREATE_CASE_POLICY_SUB_TYPE_SUCCESS,
        payload: result
    }
}


export function createCaseSuccess(result) {
    return {
        type: types.CREATE_CASE_SUCCESS,
        payload: result
    }
}

export function setCreateCaseData(result) {
    console.log(result);
    return {
        type: types.SET_CREATE_CASE_DATA,
        payload: result
    }
}

export function getDivision(token) {

    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/Divisions`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getDivisionSuccess(response));
                } else {
                    dispatch(getDivisionSuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getOrderBy(token) {
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/OrderBy`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getOrderBySuccess(response));
                } else {
                    dispatch(getOrderBySuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getSecondary(token) {
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/Secondary`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getSecondarySuccess(response));
                } else {
                    dispatch(getSecondarySuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getCaseType(token) {
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/CaseTypes`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getCaseTypeSuccess(response));
                } else {
                    dispatch(getCaseTypeSuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getCarrier(token) {
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/Carriers`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getCarrierSuccess(response));
                } else {
                    dispatch(getCarrierSuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getCoverage(token) {
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/Coverages`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getCoverageSuccess(response));
                } else {
                    dispatch(getCoverageSuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getCasePriority(token) {
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/CasesPriority`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getCasePrioritySuccess(response));
                } else {
                    dispatch(getCasePrioritySuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getBillType(token) {
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/BillingTypes`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getBillTypeSuccess(response));
                } else {
                    dispatch(getBillTypeSuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getFormType(token) {
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/FormTypes`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getFormTypeSuccess(response));
                } else {
                    dispatch(getFormTypeSuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getPolicyType(token) {
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/PolicyTypes`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getPolicyTypeSuccess(response));
                } else {
                    dispatch(getPolicyTypeSuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getSubPolicyType(token) {
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.get(`${URL.devURL}/PolicySubtypes`, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getPolicySubTypeSuccess(response));
                } else {
                    dispatch(getPolicySubTypeSuccess(response));
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}





export function createCase(data, history, token) {
    let dataValue = {
        "DivisionId": 4,
        "OrderedById": 1,
        "SecondaryId": 1,
        "CaseTypeId": 3,
        "CarrierId": 3,
        "PolicyNumber": "2345522",
        "PolicyType": 1,
        "PolicySubType": 1,
        "CoverageId": 3,
        "Insureds": {
            "InsuredName": "Vaibhav Bakshi",
            "InsuredDBA": "Vijay Pote",
            "PriorityId": 2,
            "BusinessId": "VB78889389",
            "BusinessDescription": "Test",
            "SpecialAttention": "Test",
            "BillingTypeId": 3,
            "FormTypeId": 1,
            "Correspondences": [
                {
                    "CorrespondenceTypeId": 1,
                    "Email": "test@test.com",
                    "Website": "test.com",
                    "Mobile": "9028802091",
                    "Business": "9028802091",
                    "Ext": 71,
                    "ContactName": "Test"
                },
                {
                    "CorrespondenceTypeId": 2,
                    "Email": "test@test.com",
                    "Website": "test.com",
                    "Mobile": "9028802091",
                    "Business": "9028802091",
                    "Ext": 71,
                    "ContactName": "Test"
                }
            ],
            "Addresses": [
                {
                    "AddressTypeId": 1,
                    "Street": "Warje",
                    "Zip": "411102",
                    "City": "Pune",
                    "State": "MH",
                    "Country": "India",
                    "Lat": "1.123456789",
                    "Long": "1.123456789"
                },
                {
                    "AddressTypeId": 2,
                    "Street": "Warje",
                    "Zip": "411102",
                    "City": "Pune",
                    "State": "MH",
                    "Country": "India",
                    "Lat": "1.123456789",
                    "Long": "1.123456789"
                }
            ]
        }
    }
    configuration.headers.Authorization = `Bearer ${token}`;
    return (dispatch) => {
        return axios.post(`${URL.devURL}/cases`, data, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    console.log('case created successfull');

                    dispatch(createCaseSuccess(response));
                    history.push('/dashboard');
                } else {
                    console.log('case created error');

                    dispatch(createCaseSuccess(response));
                    // history.push('/registration');
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

