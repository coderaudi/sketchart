
// import firebase from 'firebase';
import { Button, notification } from 'antd';

import axios from "axios";
import AppConfig from "../constants/AppConfig";
import { handleError } from "../helper/helper";

import {
    GET_BASIC_DATA
} from './types';


import { getContactUsData , getSketchArtGallary } from "./index";

export const getBasicData = () => dispatch => {
    dispatch({ type: GET_BASIC_DATA, });
    dispatch( getContactUsData());
    dispatch( getSketchArtGallary());
    // load the gallary Api 
  };