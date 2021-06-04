import { GET_DATA_FIRST, REQUEST_DATA } from './types';

const initialState = {
  isFetching: false,
  myData: []
};

const things = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      };
    case GET_DATA_FIRST:
      return {
        ...state,
        isFetching: false,
        myData: action.myData
      };
    default:
      return state;
  }
};

export default things;
