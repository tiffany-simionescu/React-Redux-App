// import { combineReducers } from 'redux';

// export { foxReducer } from './foxReducer';
// export { catReducer } from './catReducer';
// export { dogReducer } from './dogReducer';

// export const rootReducer = combineReducers({
//   foxReducer, 
//   catReducer, 
//   dogReducer
// })

import { 
  FETCH_FOX_IMAGE_START, 
  FETCH_FOX_IMAGE_SUCCESS, 
  FETCH_FOX_IMAGE_FAILURE, 
  FETCH_DOG_IMAGE_START, 
  FETCH_DOG_IMAGE_SUCCESS, 
  FETCH_DOG_IMAGE_FAILURE, 
  FETCH_CAT_IMAGE_START, 
  FETCH_CAT_IMAGE_SUCCESS, 
  FETCH_CAT_IMAGE_FAILURE, 
} from '../actions';

const initialState = {
  fox: 'http://randomfox.ca/images/68.jpg',
  dog: 'https://random.dog/aa8e5e24-5c58-4963-9809-10f4aa695cfc.jpg',
  // cat: 'https://aws.random.cat/view/768.jpg',
  cat: 'https:\/\/purr.objects-us-east-1.dream.io\/i\/030_-_VNZ6Gt8.gif',
  error: '',
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_FOX_IMAGE_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_FOX_IMAGE_SUCCESS:
      return {
        ...state,
        fox: action.payload,
        error: '',
        isFetching: false
      }
    case FETCH_FOX_IMAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case FETCH_DOG_IMAGE_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_DOG_IMAGE_SUCCESS:
      return {
        ...state,
        dog: action.payload,
        error: '',
        isFetching: false
      }
    case FETCH_DOG_IMAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case FETCH_CAT_IMAGE_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_CAT_IMAGE_SUCCESS:
      return {
        ...state,
        cat: action.payload,
        error: '',
        isFetching: false
      }
    case FETCH_CAT_IMAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}
