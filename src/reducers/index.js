/**
 * App Reducers
 */
import { combineReducers } from 'redux';
// import settings from './settings';
// import sidebarReducer from './SidebarReducer';
import AuthReducer from './AuthReducer';
import NoteReducer from "./NoteReducer";

import ContactUsReducer from "./ContactUsReducer";
import GallaryReducer from "./GallaryReducer";

// Admin 
import AdminReducer from "./AdminReducer";

const reducers = combineReducers({
    auth: AuthReducer,
    notes: NoteReducer,
    contactUS : ContactUsReducer,
    gallary : GallaryReducer,
    admin : AdminReducer
});

export default reducers;