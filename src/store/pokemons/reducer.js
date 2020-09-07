import types from './types';
import updateIfSameId from '@utils/updateIfSameId';

const {
  UPDATE_POKEMONS_SUCCESS,
  UPDATE_POKEMON_SUCCESS
} = types;

const initialState = {
  list: [],
  count: 0,
}

const pokemonsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case UPDATE_POKEMONS_SUCCESS:
      return {
        count: payload.count,
        list: [
          ...state.list,
          ...payload.pokemons
        ]
      };
    case UPDATE_POKEMON_SUCCESS:
      return {
        ...state,
        list: state.list.map(updateIfSameId(payload.id,
          pokemon => ({
            ...pokemon,
            ...payload
          })
        ))
      }
    default:
      return state;
  }
}

export default pokemonsReducer;
