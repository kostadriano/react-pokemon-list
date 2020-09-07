import types from '../../loading/types';
import loadingReducer from '../../loading/reducer';

const {
  START_LOADING,
  FINISH_LOADING,
} = types;

describe('Loading Reducer', () => {
  const initialState = false;

  describe('default behavior', () => {
    it('return initialState', () => {
      expect(loadingReducer(initialState, {})).toEqual(initialState);
    });
  });

  describe('when action is START_LOADING', () => {
    const action = {
      type: START_LOADING,
    };

    it('return true', () => {
      expect(loadingReducer(false, action)).toEqual(true);
    });
  });

  describe('when action is FINISH_LOADING', () => {
    const action = {
      type: FINISH_LOADING,
    };

    it('return false', () => {
      expect(loadingReducer(true, action)).toEqual(false);
    });
  });
});
