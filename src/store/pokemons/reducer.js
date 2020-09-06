import types from './types';

const {
  FINISH_FETCH_POKEMONS,
  START_FETCH_POKEMONS,
  UPDATE_POKEMONS_SUCCESS,
} = types;

const initialState = {
  list: [],
  fetching: false,
}

const pokemonsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case START_FETCH_POKEMONS:
      return {
        ...state,
        fetching: true
      };
    case FINISH_FETCH_POKEMONS:
      return {
        ...state,
        fetching: false
      };
    case UPDATE_POKEMONS_SUCCESS:
      return {
        list: [
          ...state.list,
          ...payload
        ],
        fetching: false
      };
    default:
      return state;
  }
}

export default pokemonsReducer;
