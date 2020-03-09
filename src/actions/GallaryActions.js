
// import firebase from 'firebase';
import { Button, notification } from 'antd';

import axios from "axios";
import AppConfig from "../constants/AppConfig";
import { handleError } from "../helper/helper";

import {
    GET_SKETCHART_GALLARY,
    GET_SKETCHART_GALLARY_SUCCESS,
    GET_SKETCHART_GALLARY_FAILURE
} from './types';


export const getSketchArtGallary = () => dispatch => {
    dispatch({
        type: GET_SKETCHART_GALLARY,
        });
    axios
      .get(`${AppConfig.appUrl}/api/sketchartist/gallary`)
      .then(response => {
        dispatch({
          type: GET_SKETCHART_GALLARY_SUCCESS,
          payload: response
        });
        notification['success']({
          message: 'Gallary Loaded ',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      })
      .catch(error => {
        handleError(error);
        dispatch({
          type: GET_SKETCHART_GALLARY_FAILURE,
          error: error
        });
      });
  };