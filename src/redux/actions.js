import axios from 'axios';

// Define action types
export const GET_DATA_FROM_API = 'GET_DATA_FROM_API';
export const ADD_DATA_TO_GLOBAL_STATE = 'ADD_DATA_TO_GLOBAL_STATE';
export const REMOVE_FROM_GLOBAL_STATE = 'REMOVE_FROM_GLOBAL_STATE';
export const REMOVE_ALL_STATE = 'REMOVE_ALL_STATE';

// Construct a BASE URL for API endpoint
const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'bb925e230868e5ea561be5d9be231edb';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getApiData = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);

      if (res.data) {
        dispatch({
          type: GET_DATA_FROM_API,
          payload: res.data.results,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
  }
};

export const addToState = movie => dispatch => {
  dispatch({
    type: ADD_DATA_TO_GLOBAL_STATE,
    payload: movie,
  });
};

export const removeFromState = movie => dispatch => {
  dispatch({
    type: ADD_DATA_TO_GLOBAL_STATE,
    payload: movie,
  });
};
export const removeState = () => dispatch => {
  dispatch({
    type: REMOVE_ALL_STATE,
  });
};
