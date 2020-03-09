
// import firebase from 'firebase';
import { Button, notification } from 'antd';

import axios from "axios";
import AppConfig from "../constants/AppConfig";
import { handleError } from "../helper/helper";

import {
    ADMIN_LOGIN,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILURE
} from './types';


export const adminLogin = () => dispatch => {
    dispatch({
        type: ADMIN_LOGIN,
        });
    axios
      .get(`${AppConfig.appUrl}/api/sketchartist/admin/login`)
      .then(response => {
        dispatch({
          type: ADMIN_LOGIN_SUCCESS,
          payload: response
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
              'Fail to  login .',
          });
      });
  };