import types from './types';

import { startLoading, finishLoading } from '../loading/actions';

const {
  UPDATE_POKEMONS_SUCCESS,
  UPDATE_POKEMON_SUCCESS,
} = types;

export const fetchPokemons = () =>
  async (dispatch, getState, { Pokemon }) => {
    try {
      const { pokemons: { list, count }, loading } = getState();
      const offset = list.length;

      if (offset <= count && !loading) {
        dispatch(startLoading());

        const { results, count } = await Pokemon.getPokemonsNames(offset);

        const pokemons = await Pokemon.getAllPokemons(results);

        dispatch(updatePokemonsSucces({ pokemons, count }));
      }
    }
    catch (error) {
      console.error(error);
    }

    dispatch(finishLoading());
  }

export const fetchPokemonData = pokemonId =>
  async (dispatch, getState, { Pokemon, Ability }) => {
    try {
      dispatch(startLoading());

      const { pokemons: { list } } = getState();

      const pokemon = Pokemon.find(list, pokemonId);

      if (!pokemon.fetched) {
        const abilities = await Ability.getAbilities(pokemon);
        const forms = await Pokemon.getForm(pokemon);

        const updatedPokemon = {
          ...pokemon,
          abilities,
          forms,
          fetched: true
        }

        dispatch(updatePokemonSucces(updatedPokemon))
      }
    }
    catch (error) {
      console.error(error)
    }

    dispatch(finishLoading());
  }

export const updatePokemonsSucces = ({ pokemons, count } = {}) => ({
  type: UPDATE_POKEMONS_SUCCESS,
  payload: { pokemons, count }
});

export const updatePokemonSucces = pokemon => ({
  type: UPDATE_POKEMON_SUCCESS,
  payload: pokemon
});
