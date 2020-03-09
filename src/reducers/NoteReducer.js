



// /**
//  * Auth User Reducers
//  */
import {
    ADD_NOTE,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE,
    DELETE_NOTE,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAILURE,


} from '../actions/types';

// /**
//  * initial auth user
//  */
const INIT_STATE = {
    user: localStorage.getItem('user_id'),
    loading: false,
    defUserName: "Redux-workign _defName",
    noteLabels: ['sci', 'homenotes', 'atm', 'online'],
    allNotes: [{
        labels: ['sci', 'homenotes', 'atm', 'online'],
        bgcolor: "yellow",
        title: "My NOte 1",
        note: "the note is on e is there this is all ok to work with matter one of the best to thes it how are you all ok ", type: "basic"
    }
    ]
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case ADD_NOTE:
            return { ...state, loading: true };

        case ADD_NOTE_SUCCESS:

            let updateNotes = state.allNotes;
            if (action.payload) {
                updateNotes.push(action.payload);
            }
            return { ...state, loading: false, allNotes: updateNotes };

        case ADD_NOTE_FAILURE:
            return { ...state, loading: false };

        case DELETE_NOTE:
            return { ...state, loading: true };

        case DELETE_NOTE_SUCCESS:
            let oldNotes = state.allNotes;

            oldNotes.splice(action.payload, 1);


            return { ...state, loading: false, allNotes: oldNotes };

        case DELETE_NOTE_FAILURE:
            return { ...state, loading: false };

        // case LOGOUT_USER:
        //     return { ...state, user: null };

        // case SIGNUP_USER:
        //     return { ...state, loading: true };

        // case SIGNUP_USER_SUCCESS:
        //     return { ...state, loading: false, user: action.payload };

        // case SIGNUP_USER_FAILURE:
        //     return { ...state, loading: false };

        default: return { ...state };
    }
}


