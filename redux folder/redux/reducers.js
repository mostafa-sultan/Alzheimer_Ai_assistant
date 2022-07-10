import { GET_DATA_FROM_API, ADD_DATA_TO_GLOBAL_STATE, REMOVE_FROM_GLOBAL_STATE, REMOVE_ALL_STATE } from './actions';

const initialState = {
  movies: [],
  favorites: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FROM_API:
      console.log("get data from api to global");
      return { ...state, movies: action.payload };
    case ADD_DATA_TO_GLOBAL_STATE:
      console.log("add data to global");
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_GLOBAL_STATE:
      console.log("remove some data from global state");
      return {
        ...state,
        favorites: state.favorites.filter(
          movie => movie.id !== action.payload.id,
        ),
      };
    case REMOVE_ALL_STATE:
      console.log("remove state");
      return initialState;
    default:
      return state;
  }
}
export const authReducer = (state = { "jwt": "jdy64746" }, action) => {
  switch (action.type) {
    case REMOVE_ALL_STATE:
      console.log("remove authReducer");
      return initialState;
    default:
      return state;
  }
}
// export default moviesReducer;
