import axios from 'axios';

export const FETCH_CAT_IMAGE_START = 'FETCH_CAT_IMAGE_START';
export const FETCH_CAT_IMAGE_SUCCESS = 'FETCH_CAT_IMAGE_SUCCESS';
export const FETCH_CAT_IMAGE_FAILURE = 'FETCH_CAT_IMAGE_FAILURE';

// const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://aws.random.cat/meow';

export const getCatImage = () => dispatch => {
  dispatch({ type: FETCH_CAT_IMAGE_START });
  axios.get(url)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_CAT_IMAGE_SUCCESS, payload: res.data.file })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_CAT_IMAGE_FAILURE,
        payload: `${err.response}`
      })
    })
}