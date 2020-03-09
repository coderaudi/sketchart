
// import firebase from 'firebase';
// import { NotificationManager } from 'react-notifications';
import {
    ADD_NOTE,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE,
    DELETE_NOTE,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAILURE,


} from '../actions/types';


export const addNewNote = (note) => (dispatch) => {
    dispatch({ type: ADD_NOTE });

    if (note) {
        dispatch({ type: ADD_NOTE_SUCCESS, payload: note });

    } else {
        let error: "Fail to add note"
        dispatch({ type: ADD_NOTE_FAILURE, error: error });
    }
    // firebase.auth()
    //     .signInWithEmailAndPassword(user.email, user.password)
    //     .then((user) => {
    //         localStorage.setItem("user_id", "user-id");
    //         dispatch({ type: ADD_NOTE_SUCCESS, payload: localStorage.getItem('user_id') });
    //         // history.push('/');
    //         // NotificationManager.success('User Login Successfully!');
    //     })
    //     .catch((error) => {
    //         dispatch({ type: ADD_NOTE_FAILURE });
    //         NotificationManager.error(error.message);
    //     });
}




export const deleteOldNote = (index) => (dispatch) => {
    dispatch({ type: DELETE_NOTE });


    dispatch({ type: DELETE_NOTE_SUCCESS, payload: index });

    // } else {
    //     let error: "Fail to add note"
    //     dispatch({ type: DELETE_NOTE_FAILURE, error: error });
    // }

}

// /**
//  * Redux Action To Signout User From  Firebase
//  */
// export const logoutUserFromFirebase = () => (dispatch) => {
//     firebase.auth().signOut()
//         .then(() => {
//             dispatch({ type: LOGOUT_USER });
//             localStorage.removeItem('user_id');
//             NotificationManager.success('User Logout Successfully');
//         })
//         .catch((error) => {
//             NotificationManager.error(error.message);
//         })
// }

// /**
//  * Redux Action To Signup User In Firebase
//  */
// export const signupUserInFirebase = (user, history) => (dispatch) => {
//     dispatch({ type: SIGNUP_USER });
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//         .then((success) => {
//             localStorage.setItem("user_id", "user-id");
//             dispatch({ type: SIGNUP_USER_SUCCESS, payload: localStorage.getItem('user_id') });
//             history.push('/');
//             NotificationManager.success('Account Created Successfully!');
//         })
//         .catch((error) => {
//             dispatch({ type: SIGNUP_USER_FAILURE });
//             NotificationManager.error(error.message);
//         })
// }

// /**
//  * Redux Action To Signin User In Firebase With Facebook
//  */
// export const signinUserWithFacebook = (history) => (dispatch) => {
//     dispatch({ type: LOGIN_USER });
//     const provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//         localStorage.setItem("user_id", "user-id");
//         dispatch({ type: LOGIN_USER_SUCCESS, payload: localStorage.getItem('user_id') });
//         history.push('/');
//         NotificationManager.success(`Hi ${result.user.displayName}!`);
//     }).catch(function (error) {
//         dispatch({ type: LOGIN_USER_FAILURE });
//         NotificationManager.error(error.message);
//     });
// }

// /**
//  * Redux Action To Signin User In Firebase With Google
//  */
// export const signinUserWithGoogle = (history) => (dispatch) => {
//     dispatch({ type: LOGIN_USER });
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//         localStorage.setItem("user_id", "user-id");
//         dispatch({ type: LOGIN_USER_SUCCESS, payload: localStorage.getItem('user_id') });
//         history.push('/');
//         NotificationManager.success(`Hi ${result.user.displayName}!`);
//     }).catch(function (error) {
//         dispatch({ type: LOGIN_USER_FAILURE });
//         NotificationManager.error(error.message);
//     });
// }

// /**
//  * Redux Action To Signin User In Firebase With Github
//  */
// export const signinUserWithGithub = (history) => (dispatch) => {
//     dispatch({ type: LOGIN_USER });
//     const provider = new firebase.auth.GithubAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//         localStorage.setItem("user_id", "user-id");
//         dispatch({ type: LOGIN_USER_SUCCESS, payload: localStorage.getItem('user_id') });
//         history.push('/');
//         NotificationManager.success(`Hi ${result.user.displayName}!`);
//     }).catch(function (error) {
//         dispatch({ type: LOGIN_USER_FAILURE });
//         NotificationManager.error(error.message);
//     });
// }

// /**
//  * Redux Action To Signin User In Firebase With Twitter
//  */
// export const signinUserWithTwitter = (history) => (dispatch) => {
//     dispatch({ type: LOGIN_USER });
//     const provider = new firebase.auth.TwitterAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//         localStorage.setItem("user_id", "user-id");
//         dispatch({ type: LOGIN_USER_SUCCESS, payload: localStorage.getItem('user_id') });
//         history.push('/');
//         console.log(result)
//         NotificationManager.success('User Login Successfully!');
//     }).catch(function (error) {
//         dispatch({ type: LOGIN_USER_FAILURE });
//         NotificationManager.error(error.message);
//     });
// }