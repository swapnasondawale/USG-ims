
import * as types from '../actionTypes/LoginActionsTypes'
const initialState = {
    user: {}
};

const LoginReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.GET_LOGIN_SUCCESS:

            return {
                ...state,
                loginData: action.payload
            }

        case types.REGISTER_USER_SUCCESS:

            return {
                ...state,
                registerUserData: action.payload
            }

        default:
            return state
    }

}
export default LoginReducer;