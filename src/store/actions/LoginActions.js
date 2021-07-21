import * as types from '../actionTypes/LoginActionsTypes';
import URL from '../../constants/AppConstants';
import axios from 'axios';


const configuration = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

export function getLoginSuccess(result) {
    return {
        type: types.GET_LOGIN_SUCCESS,
        payload: result
    }
}

export function registerUserSuccess(result) {
    return {
        type: types.REGISTER_USER_SUCCESS,
        payload: result
    }
}

export function getLogin(data, history) {
    return (dispatch) => {
        return axios.post(`${URL.devURL}/login`, data, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(getLoginSuccess(response));
                    history.push('/dashboard');
                } else {
                    dispatch(getLoginSuccess(response));
                    history.push('/');
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


export function registerUser(data, history) {
    return (dispatch) => {
        return axios.post(`${URL.devURL}/users`, data, configuration)
            .then(function (response) {

                if (response.status === 200) {
                    console.log('responce', response);
                    dispatch(registerUserSuccess(response));
                    history.push('/congratulation');
                } else {
                    dispatch(registerUserSuccess(response));
                    history.push('/registration');
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

