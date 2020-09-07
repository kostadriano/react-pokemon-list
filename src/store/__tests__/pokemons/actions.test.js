import types from '../../pokemons/types';

import * as actions from '../../pokemons/actions';
import * as loadingActions from '../../loading/actions';

const {
  UPDATE_POKEMONS_SUCCESS,
  UPDATE_POKEMON_SUCCESS,
} = types;

const pokemons = [
  { name: 'squirtle' },
  { name: 'bulbasaur' },
  { name: 'charizard' },
]

describe('Pokemons Actions', () => {
  describe('sync actions', () => {
    describe('updatePokemonsSuccess', () => {
      it('creates UPDATE_POKEMONS_SUCCESS action', () => {
        const count = 5;

        const expectedAction = {
          type: UPDATE_POKEMONS_SUCCESS,
          payload: { pokemons, count }
        }

        const actionReturn = actions.updatePokemonsSucces({ pokemons, count });

        expect(actionReturn).toEqual(expectedAction);
      });
    });

    describe('updatePokemonSuccess', () => {
      it('creates UPDATE_POKEMON_SUCCESS action', () => {
        const expectedAction = {
          type: UPDATE_POKEMON_SUCCESS,
          payload: pokemons
        }

        const actionReturn = actions.updatePokemonSucces(pokemons);

        expect(actionReturn).toEqual(expectedAction);
      });
    });
  });

  describe('async actions', () => {
    let mockedDispatch;

    beforeEach(() => {
      mockedDispatch = jest.fn();
    })

    describe('fetchPokemons', () => {
      describe('when count is bigger then list size', () => {
        const mockedPokemonDomain = {
          getPokemonsNames: jest.fn(() => ({ results: [], count: 1000 })),
          getAllPokemons: jest.fn(),
        }

        describe('when loading is false', () => {
          const mockedGetState = jest.fn(() => ({
            pokemons: {
              list: [1, 2, 3],
              count: 1000
            },
            loading: false
          }))

          it('dispatch startLoading', async () => {
            await actions.fetchPokemons()(mockedDispatch, mockedGetState, { Pokemon: mockedPokemonDomain })
            expect(mockedDispatch).toHaveBeenCalledWith(loadingActions.startLoading());
          });
        });

        describe('when loading is true', () => {
          const mockedGetState = jest.fn(() => ({
            pokemons: {
              list: [1, 2, 3],
              count: 1000
            },
            loading: true
          }))

          it('do not dispatch startLoading', async () => {
            await actions.fetchPokemons()(mockedDispatch, mockedGetState, { Pokemon: mockedPokemonDomain })
            expect(mockedDispatch).not.toHaveBeenCalledWith(loadingActions.startLoading());
          });
        });
      });

      describe('when count is smaller then list size', () => {
        const mockedPokemonDomain = {
          getPokemonsNames: jest.fn(() => ({ results: [], count: 1000 })),
          getAllPokemons: jest.fn(),
        }

        const mockedGetState = jest.fn(() => ({
          pokemons: {
            list: [1, 2, 3],
            count: 1
          },
          loading: false
        }))

        it('do not dispatch startLoading', async () => {
          await actions.fetchPokemons()(mockedDispatch, mockedGetState, { Pokemon: mockedPokemonDomain })
          expect(mockedDispatch).not.toHaveBeenCalledWith(loadingActions.startLoading());
        });
      });

      describe('on success', () => {
        const mockedGetState = jest.fn(() => ({
          pokemons: {
            list: [],
            count: 1000,
          },
          loading: false
        }))

        const getPokemonsNamesReturn = {
          results: pokemons,
          count: 1000
        }

        const mockedPokemonDomain = {
          getPokemonsNames: jest.fn(() => getPokemonsNamesReturn),
          getAllPokemons: jest.fn(data => data),
        }

        it('dispatch updatePokemonsSuccess with pokemons results', async () => {
          await actions.fetchPokemons()(mockedDispatch, mockedGetState, { Pokemon: mockedPokemonDomain })

          expect(mockedDispatch).toHaveBeenCalledWith(actions.updatePokemonsSucces({
            pokemons: getPokemonsNamesReturn.results,
            count: getPokemonsNamesReturn.count
          }));
        });
      });

      describe('on fail', () => {
        const mockedPokemonDomain = {
          getPokemonsNames: jest.fn(() => new Promise((resolve, reject) => reject())),
          getAllPokemons: jest.fn(),
        }

        const mockedGetState = jest.fn(() => ({
          pokemons: {
            list: [],
            count: 1000,
          },
          loading: false
        }))

        it('dispatch finishLoading', async () => {
          await actions.fetchPokemons()(mockedDispatch, mockedGetState, { Pokemon: mockedPokemonDomain })

          expect(mockedDispatch).toHaveBeenCalledWith(loadingActions.finishLoading());
        });
      });
    });

    describe('fetchPokemonData', () => {
      const pokemons = [
        { name: 'squirtle' },
        { name: 'bulbasaur' },
        { name: 'charizard' },
      ]

      const mockedAbilityDomain = {
        getAbilities: jest.fn(() => [])
      }

      const mockedPokemonDomain = {
        getForm: jest.fn(() => []),
        find: jest.fn((a, b) => pokemons[0])
      }

      const mockedGetState = jest.fn(() => ({
        pokemons: {
          list: pokemons
        }
      }))

      it('dispatches startLoading', async () => {
        await actions.fetchPokemonData(1)(mockedDispatch, mockedGetState, { Pokemon: mockedPokemonDomain, Ability: mockedAbilityDomain })
        expect(mockedDispatch).toHaveBeenCalledWith(loadingActions.startLoading());
      });

      describe('when pokemon is not fetched yet', () => {
        const pokemon = { name: 'a', fetched: false };

        const mockedPokemonDomain = {
          getForm: jest.fn(() => []),
          find: jest.fn((a, b) => pokemon)
        }

        it('call updatePokemonSucces', async () => {
          const mockedDispatch = jest.fn();

          await actions.fetchPokemonData(1)(mockedDispatch, mockedGetState, { Pokemon: mockedPokemonDomain, Ability: mockedAbilityDomain })

          const updatedPokemon = {
            abilities: [],
            fetched: true,
            forms: [],
            name: pokemon.name
          }

          expect(mockedDispatch).toHaveBeenCalledWith(actions.updatePokemonSucces(updatedPokemon));
        });
      });

      describe('when pokemon is already fetched', () => {
        const mockedPokemonDomain = {
          getForm: jest.fn(() => []),
          find: jest.fn((a, b) => ({ name: 'a', fetched: true }))
        }

        it('do not call updatePokemonSucces', async () => {
          const mockedDispatch = jest.fn();

          await actions.fetchPokemonData(1)(mockedDispatch, mockedGetState, { Pokemon: mockedPokemonDomain, Ability: mockedAbilityDomain })

          expect(mockedDispatch).not.toHaveBeenCalledWith(actions.updatePokemonSucces());
        });
      });
    });
  });
});
