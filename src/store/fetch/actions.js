import { REQUEST_DATA, GET_DATA_FIRST } from './types';

export const requestData = () => ({ type: REQUEST_DATA });

export const getDataFirst = (myData) => ({ type: GET_DATA_FIRST, myData });

const getData = () => {
  return fetch('https://spaceflightnewsapi.net/api/v2/articles').then((res) => res.json());
};

export const fetchData = () => (dispatch) => {
  dispatch(requestData());
  return getData().then((things) => {
    return dispatch(getDataFirst(things));
  });
};
