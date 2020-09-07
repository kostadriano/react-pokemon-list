import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '@store/pokemons/actions';

import { FlexBox } from '@components/ui/Box';

import PokemonCard from '../PokemonCard';
import PokemonInfoModal from '../PokemonInfoModal'

const PokemonsList = () => {
  const [pokemonInfoModal, setPokemonInfoModal] = React.useState({
    open: false,
    pokemonId: null
  })

  const pokemons = useSelector(state => state.pokemons.list);
  const dispatch = useDispatch();

  const fetchMorePokemons = useCallback(() => {
    dispatch(fetchPokemons())
  }, [dispatch])

  useEffect(() => {
    fetchMorePokemons()
  }, [fetchMorePokemons])


  const handlePokemonCardClick = ({ pokemonId }) => {
    setPokemonInfoModal({
      open: true,
      pokemonId
    });
  };

  const handlePokemonInfoModalClose = () => {
    setPokemonInfoModal({
      open: false,
      pokemonId: null
    });
  };

  return (
    <>
      <FlexBox flexWrap="wrap">
        {pokemons.map(pokemon =>
          <PokemonCard
            onClick={() => handlePokemonCardClick({ pokemonId: pokemon.id })}
            key={pokemon.id}
            pokemon={pokemon}
          />
        )}
      </FlexBox>

      <PokemonInfoModal
        handleClose={handlePokemonInfoModalClose}
        {...pokemonInfoModal}
      />
    </>
  )
}

export default PokemonsList;
