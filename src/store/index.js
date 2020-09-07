import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as Pokemon from '@domain/pokemon';
import * as Ability from '@domain/ability';

import pokemons from './pokemons/reducer';
import loading from './loading/reducer';

const dependencies = {
  Pokemon,
  Ability
}

const reducers = combineReducers({
  pokemons,
  loading
});

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(dependencies))
  )
);
