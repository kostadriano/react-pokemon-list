import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '@store/pokemons/actions';

import { FlexBox } from '@components/ui/Box';

import PokemonCard from '../PokemonCard';

const PokemonsList = () => {
  const pokemons = useSelector(state => state.pokemons.list);
  const dispatch = useDispatch();

  const fetchMorePokemons = useCallback(() => {
    dispatch(fetchPokemons())
  }, [dispatch])

  useEffect(() => {
    fetchMorePokemons()
  }, [fetchMorePokemons])

  return (
    <>
      <FlexBox flexWrap="wrap">
        {pokemons.map(pokemon =>
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        )}
      </FlexBox>
    </>
  )
}

export default PokemonsList;
