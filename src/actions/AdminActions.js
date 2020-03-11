
// import firebase from 'firebase';
import { Button, notification } from 'antd';

import axios from "axios";
import AppConfig from "../constants/AppConfig";
import { handleError , getTokenHeader } from "../helper/helper";

import {
    ADMIN_LOGIN,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILURE ,
    GET_ALL_USER,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAILURE
} from './types';


export const adminLogin = (data) => dispatch => {
    dispatch({
        type: ADMIN_LOGIN,
        });
    axios
      .post(`${AppConfig.appUrl}/api/sketchart/login` , data)
      .then(response => {
        dispatch({
          type: ADMIN_LOGIN_SUCCESS,
          payload: response
        });

        notification['success']({
          message: 'Login Success!',
          description:
            'Login Successful.',
        });

      })
      .catch(error => {
        handleError(error);
        dispatch({
          type: ADMIN_LOGIN_FAILURE,
          error: error
        });
        notification['error']({
            message: 'Login Error',
            description:
              'Fail to  login.',
          });
      });
  };


  // ALL USRE 



  
export const getAllUsers = (data) => dispatch => {

 const header = {
    headers: {
       Authorization: "Bearer " + localStorage.getItem('token'),
    }
 }

  dispatch({
      type: GET_ALL_USER,
      });
  axios
    .get(`${AppConfig.appUrl}/api/sketchart/allusers`,  header , data)
    .then(response => {
      dispatch({
        type: GET_ALL_USER_SUCCESS,
        payload: response
      });

      console.log(response);

      notification['success']({
        message: 'All USer Success!',
        description:
          'Login Successful.',
      });

    })
    .catch(error => {
      handleError(error);
      dispatch({
        type: GET_ALL_USER_FAILURE,
        error: error
      });
      notification['error']({
          message: 'All User Error',
          description:
            'Fail to  login.',
        });
    });
};