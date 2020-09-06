import types from '../../pokemons/types';

import * as actions from '../../pokemons/actions';

const {
  FINISH_FETCH_POKEMONS,
  START_FETCH_POKEMONS,
  UPDATE_POKEMONS_SUCCESS,
} = types;


describe('Pokemons Actions', () => {
  describe('sync actions', () => {
    describe('updatePokemonsSucces', () => {
      it('creates UPDATE_POKEMONS_SUCCESS action', () => {
        const pokemons = [
          { name: 'pokemon1' },
          { name: 'pokemon2' },
        ];

        const expectedAction = {
          type: UPDATE_POKEMONS_SUCCESS,
          payload: pokemons
        }

        expect(actions.updatePokemonsSucces(pokemons)).toEqual(expectedAction);
      });
    });

    describe('startFetchPokemons', () => {
      it('creates START_FETCH_POKEMONS action', () => {
        const expectedAction = {
          type: START_FETCH_POKEMONS,
        }

        expect(actions.startFetchPokemons()).toEqual(expectedAction);
      });
    });

    describe('finishFetchPokemons', () => {
      it('creates FINISH_FETCH_POKEMONS action', () => {
        const expectedAction = {
          type: FINISH_FETCH_POKEMONS,
        }

        expect(actions.finishFetchPokemons()).toEqual(expectedAction);
      });
    });
  });

  describe('async actions', () => {
    const mockedPokemonDomain = {
      getPokemons: jest.fn(() => ({ results: [] }))
    }

    const mockedDispatch = jest.fn();

    describe('fetchPokemons', () => {
      it('dispatch startFetchPokemons', async () => {
        await actions.fetchPokemons()(mockedDispatch, null, { Pokemon: mockedPokemonDomain })

        expect(mockedDispatch).toHaveBeenCalledWith(actions.startFetchPokemons());
      });

      describe('on success', () => {
        const pokemons = [
          { name: 'pokemon1' },
          { name: 'pokemon2' },
        ];

        const mockedPokemonDomain = {
          getPokemons: jest.fn(() => ({ results: pokemons }))
        }

        it('dispatch updatePokemonsSucces with pokemons results', async () => {
          await actions.fetchPokemons()(mockedDispatch, null, { Pokemon: mockedPokemonDomain })

          expect(mockedDispatch).toHaveBeenCalledWith(actions.updatePokemonsSucces(pokemons));

        });
      });

      describe('on fail', () => {
        const mockedPokemonDomain = {
          getPokemons: jest.fn(() => new Promise((resolve, reject) => reject()))
        }

        it('dispatch finishFetchPokemons', async () => {
          await actions.fetchPokemons()(mockedDispatch, null, { Pokemon: mockedPokemonDomain })

          expect(mockedDispatch).toHaveBeenCalledWith(actions.finishFetchPokemons());

        });
      });
    });
  });
});
