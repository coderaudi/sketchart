/**
 * Admin Reducers
 */
import {
    ADMIN_LOGIN,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILURE,

    GET_ALL_USER,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAILURE,
    

} from '../actions/types';

// /**
//  * initial auth user
//  */
const INIT_STATE = {
    loadingAdminLogin: false,
    adminLoginStatus: false,
    adminUser : null,

    allUserLoading : false,
    allUserList : null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case ADMIN_LOGIN:
            return {
                ...state, loadingAdminLogin: true,
                adminLoginStatus: false
            };

        case ADMIN_LOGIN_SUCCESS:

          localStorage.setItem('token', action.payload.data.token);

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

            case GET_ALL_USER:
                return {
                    ...state,  allUserLoading : true,
                 
                };
    
            case GET_ALL_USER_SUCCESS:

                return {
                    ...state,
                     allUserLoading : false,
                     allUserList : action.payload.data
                };
    
            case GET_ALL_USER_FAILURE:
                return {
                    ...state,
                    allUserLoading : false
                };
    

        default: return { ...state };
    }
}