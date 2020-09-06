import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Pokemon from '@domain/pokemon';
import thunk from 'redux-thunk';

import pokemons from './pokemons/reducer';

const dependencies = {
  Pokemon
}

const reducers = combineReducers({
  pokemons
});

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(dependencies))
  )
);
