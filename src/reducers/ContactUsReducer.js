// /**
//  * Contact us  Reducers
//  */
import {
    GET_CONTACT_US_DATA,
    GET_CONTACT_US_DATA_SUCCESS,
    GET_CONTACT_US_DATA_FAILURE
} from '../actions/types';

// /**
//  * initial auth user
//  */
const INIT_STATE = {
    // user: localStorage.getItem('user_id'),
    constactUsData : null,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_CONTACT_US_DATA:
            return { ...state, loading: true };

        case GET_CONTACT_US_DATA_SUCCESS:
            return { ...state, loading: false, user: action.payload };

        case GET_CONTACT_US_DATA_FAILURE:
            return { ...state, loading: false };

        default: return { ...state };
    }
}