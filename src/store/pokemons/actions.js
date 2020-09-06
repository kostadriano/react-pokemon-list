import types from './types';

const {
  FINISH_FETCH_POKEMONS,
  START_FETCH_POKEMONS,
  UPDATE_POKEMONS_SUCCESS,
} = types;

export const fetchPokemons = () =>
  async (dispatch, getState, { Pokemon }) => {
    try {
      dispatch(startFetchPokemons());

      const { results } = await Pokemon.getPokemons();

      dispatch(updatePokemonsSucces(results));
    }
    catch (error) {
      console.error(error);
      dispatch(finishFetchPokemons());
    }
  }

export const updatePokemonsSucces = pokemons => ({
  type: UPDATE_POKEMONS_SUCCESS,
  payload: pokemons
});

export const startFetchPokemons = () => ({
  type: START_FETCH_POKEMONS
});

export const finishFetchPokemons = () => ({
  type: FINISH_FETCH_POKEMONS
});
