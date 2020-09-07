import React, { useEffect } from 'react';

import Modal from '@components/ui/Modal';
import Box from '@components/ui/Box';
import Divider from '@components/ui/Divider';

import PokemonInfoModalHeader from './PokemonInfoModalHeader';
import PokemonInfoModalContent from './PokemonInfoModalContent';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonData } from '@store/pokemons/actions';

import * as PokemonDomain from '@domain/pokemon'

const PokemonInfoModal = ({ open, pokemonId, handleClose }) => {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => PokemonDomain.find(state.pokemons.list, pokemonId));

  useEffect(() => {
    if (pokemon && !pokemon.fetched) {
      dispatch(fetchPokemonData(pokemon.id))
    }
  }, [pokemon, dispatch])

  return pokemon
    ? (
      <Modal
        isOpen={open}
        onBackgroundClick={handleClose}
        width={{
          xs: 0.9,
          sm: 0.8,
          md: 0.6,
          lg: 1 / 2
        }}
        maxHeight='80%'
        overflow='auto'
      >
        <Box backgroundColor="white" color="black">
          <PokemonInfoModalHeader pokemon={pokemon} onClick={handleClose} />

          <Divider width={0.95} />

          <PokemonInfoModalContent pokemon={pokemon} />
        </Box>
      </Modal>
    )
    : null
}

PokemonInfoModal.defaultProps = {
  open: false,
  pokemonId: null
}

export default PokemonInfoModal;
