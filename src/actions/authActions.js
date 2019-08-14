import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register Worker
export const registerWorker = (data, history) => dispatch => {
  axios
    .post('https://wishywashy-api.herokuapp.com/api/auth/worker/register', data)
    .then(res => history.push('/loginWorker'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Register Manager
export const registerManager = (data, history) => dispatch => {
    axios
      .post('https://wishywashy-api.herokuapp.com/api/auth/manager/register', data)
      .then(res => history.push('/loginManager'))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  
  // Login Worker - Get User Token
export const loginWorker = (data, history) => dispatch => {
  axios
    .post('https://wishywashy-api.herokuapp.com/api/auth/worker/login', data)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      sessionStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));

      history.push('/helloWorker');
    }).catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    );
};

  // Login Manager - Get User Token
  export const loginManager = (data, history) => dispatch => {
    axios
      .post('https://wishywashy-api.herokuapp.com/api/auth/manager/login', data)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));

        history.push('/helloManager');
      })
      .catch(err => {
        console.log(err);
        
        dispatch({
          type: GET_ERRORS,
          payload: err.response
        })
      });
  };
  
  // Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logout = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
