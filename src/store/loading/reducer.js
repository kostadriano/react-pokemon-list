import types from './types';

const {
  START_LOADING,
  FINISH_LOADING,
} = types;

const initialState = false;

const loadingReducer = (state = initialState, { type } = {}) => {
  switch (type) {
    case START_LOADING:
      return true;
    case FINISH_LOADING:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;
