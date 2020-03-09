/**
 * Admin Reducers
 */
import {
    ADMIN_LOGIN,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILURE
} from '../actions/types';

// /**
//  * initial auth user
//  */
const INIT_STATE = {
    loadingAdminLogin: false,
    adminLoginStatus: false,
    adminUser : null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case ADMIN_LOGIN:
            return {
                ...state, loadingAdminLogin: true,
                adminLoginStatus: false
            };

        case ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                loadingAdminLogin: true,
                adminLoginStatus: true,
                adminUser : action.payload.data
            };

        case ADMIN_LOGIN_FAILURE:
            return {
                ...state,
                loadingAdminLogin: false,
                adminLoginStatus: false
            };

        default: return { ...state };
    }
}