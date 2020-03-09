
// import firebase from 'firebase';
import { Button, notification } from 'antd';

import axios from "axios";
import AppConfig from "../constants/AppConfig";
import { handleError } from "../helper/helper";

import {
    GET_CONTACT_US_DATA,
    GET_CONTACT_US_DATA_SUCCESS,
    GET_CONTACT_US_DATA_FAILURE
} from './types';


export const getContactUsData = () => dispatch => {
    dispatch({
        type: GET_CONTACT_US_DATA,
        });
    axios
      .get(`${AppConfig.appUrl}/api/sketchartist/contact_us`)
      .then(response => {
        dispatch({
          type: GET_CONTACT_US_DATA_SUCCESS,
          payload: response
        });
        notification['success']({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      })
      .catch(error => {
        handleError(error);
        dispatch({
          type: GET_CONTACT_US_DATA_FAILURE,
          error: error
        });
      });
  };