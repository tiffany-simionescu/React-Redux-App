import { 
  FETCH_FOX_IMAGE_START, 
  FETCH_FOX_IMAGE_SUCCESS, 
  FETCH_FOX_IMAGE_FAILURE, 
} from '../actions';

const initialState = {
  fox: 'http://randomfox.ca/images/68.jpg',
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
    default:
      return state;
  }
}