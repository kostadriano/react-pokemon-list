import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import pokemons from './pokemons/reducer';

const reducers = combineReducers({
  pokemons
});

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
