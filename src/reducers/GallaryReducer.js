// /**
//  * Contact us  Reducers
//  */
import {
    GET_SKETCHART_GALLARY,
    GET_SKETCHART_GALLARY_SUCCESS,
    GET_SKETCHART_GALLARY_FAILURE
} from '../actions/types';

// /**
//  * initial auth user
//  */
const INIT_STATE = {
    loadingGallary: false,
    gallary: null,
    carousel_gallary : null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_SKETCHART_GALLARY:
            return { ...state, loadingGallary: true };

        case GET_SKETCHART_GALLARY_SUCCESS:
            return {
                ...state, loadingGallary: false,
                gallary: action.payload.data.gallary,
                carousel_gallary : action.payload.data.carousel_gallary
            };

        case GET_SKETCHART_GALLARY_FAILURE:
            return { ...state, loadingGallary: false };

        default: return { ...state };
    }
}