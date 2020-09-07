import types from './types';

const {
  START_LOADING,
  FINISH_LOADING,
} = types;

export const startLoading = () => ({
  type: START_LOADING
});

export const finishLoading = () => ({
  type: FINISH_LOADING
});
