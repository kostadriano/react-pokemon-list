import types from '../../pokemons/types';
import pokemonsReducer from '../../pokemons/reducer';

const {
  UPDATE_POKEMON_SUCCESS,
  UPDATE_POKEMONS_SUCCESS,
} = types;


describe('Pokemons Reducer', () => {
  const initialState = {
    list: [],
    count: 0
  }

  describe('default behavior', () => {
    it('return initialState', () => {
      expect(pokemonsReducer(initialState, {})).toEqual(initialState);
    });
  });

  describe('when action is UPDATE_POKEMONS_SUCCESS', () => {
    const pokemons = [
      { name: 'a' },
      { name: 'b' },
      { name: 'c' },
    ]

    const action = {
      type: UPDATE_POKEMONS_SUCCESS,
      payload: {
        count: initialState.count,
        pokemons
      }
    };

    it('return state list with new payload', () => {
      const state = {
        ...initialState,
        list: [
          { name: 'd' },
          { name: 'e' },
        ]
      }

      const expectedState = {
        ...state,
        list: [
          ...state.list,
          ...pokemons
        ]
      }

      expect(pokemonsReducer(state, action)).toEqual(expectedState);
    });

    it('udpate pokemons total count ', () => {
      const count = 1500;

      const action = {
        type: UPDATE_POKEMONS_SUCCESS,
        payload: {
          count,
          pokemons: []
        }
      };

      const state = initialState;

      const expectedState = {
        ...state,
        count
      }

      expect(pokemonsReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('when action is UPDATE_POKEMON_SUCCESS', () => {
    const pokemons = [
      { name: 'a', id: 1 },
      { name: 'b', id: 2 },
      { name: 'c', id: 3 },
    ]

    const updatedPokemon = {
      ...pokemons[0],
      newData: 'newData',
    }

    const action = {
      type: UPDATE_POKEMON_SUCCESS,
      payload: updatedPokemon
    };

    it('return state list with updated pokemon', () => {
      const state = {
        ...initialState,
        list: pokemons
      }

      const [_oldPokemon, ...otherPokemons] = state.list;

      const expectedState = {
        ...state,
        list: [
          updatedPokemon,
          ...otherPokemons,
        ]
      }

      expect(pokemonsReducer(state, action)).toEqual(expectedState);
    });
  });
});
