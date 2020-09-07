import React from 'react';

import { Box, FlexBox } from '@components/ui/Box';
import Divider from '@components/ui/Divider';

import PokemonInfos from './PokemonInfos';
import PokemonStats from './PokemonStats';
import PokemonAbilities from './PokemonAbilities';
import PokemonForms from './PokemonForms';

const PokemonInfoModalContent = ({ pokemon }) =>
  <Box padding={3}>
    <FlexBox alignItems="start" flexWrap='wrap'>
      <Box marginBottom={2}>
        <PokemonInfos pokemon={pokemon} />
      </Box>

      <Box marginBottom={2}>
        <PokemonStats stats={pokemon.stats} />
      </Box>
    </FlexBox>

    <Divider marginY={2} />

    <PokemonAbilities abilities={pokemon.abilities} />

    <Divider marginY={2} />

    <PokemonForms forms={pokemon.forms} />
  </Box>

export default PokemonInfoModalContent;
