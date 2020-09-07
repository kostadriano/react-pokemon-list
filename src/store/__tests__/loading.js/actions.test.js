import types from '../../loading/types';

import * as actions from '../../loading/actions';

const {
  START_LOADING,
  FINISH_LOADING,
} = types;

describe('Loading Actions', () => {
  describe('startLoading', () => {
    it('creates START_LOADING action', () => {
      const expectedAction = {
        type: START_LOADING,
      }

      const actionReturn = actions.startLoading();

      expect(actionReturn).toEqual(expectedAction);
    });
  });

  describe('finishLoading', () => {
    it('creates FINISH_LOADING action', () => {
      const expectedAction = {
        type: FINISH_LOADING,
      }

      const actionReturn = actions.finishLoading();

      expect(actionReturn).toEqual(expectedAction);
    });
  });
});
