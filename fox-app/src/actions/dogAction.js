import axios from 'axios';

export const FETCH_DOG_IMAGE_START = 'FETCH_DOG_IMAGE_START';
export const FETCH_DOG_IMAGE_SUCCESS = 'FETCH_DOG_IMAGE_SUCCESS';
export const FETCH_DOG_IMAGE_FAILURE = 'FETCH_DOG_IMAGE_FAILURE';

// const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://random.dog/woof.json';

export const getDogImage = () => dispatch => {
  dispatch({ type: FETCH_DOG_IMAGE_START });
  axios.get(url)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_DOG_IMAGE_SUCCESS, payload: res.data.url })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_DOG_IMAGE_FAILURE,
        payload: `${err.response}`
      })
    })
}