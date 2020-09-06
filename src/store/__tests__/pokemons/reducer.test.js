import types from '../../pokemons/types';
import pokemonsReducer from '../../pokemons/reducer';

const {
  FINISH_FETCH_POKEMONS,
  START_FETCH_POKEMONS,
  UPDATE_POKEMONS_SUCCESS,
} = types;


describe('Pokemons Reducer', () => {
  const initialState = {
    list: [],
    fetching: false
  }

  describe('default behavior', () => {
    it('return initialState', () => {
      expect(pokemonsReducer(initialState, {})).toEqual(initialState);
    });
  });

  describe('when action is START_FETCH_POKEMONS', () => {
    const action = {
      type: START_FETCH_POKEMONS
    };

    it('return state with fetching true', () => {
      const expectedState = {
        ...initialState,
        fetching: true
      }

      expect(pokemonsReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('when action is FINISH_FETCH_POKEMONS', () => {
    const action = {
      type: FINISH_FETCH_POKEMONS
    };

    it('return state with fetching false', () => {
      const state = {
        ...initialState,
        fetching: true
      }

      const expectedState = {
        ...state,
        fetching: false
      }

      expect(pokemonsReducer(state, action)).toEqual(expectedState);
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
      payload: pokemons
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
  });
});
