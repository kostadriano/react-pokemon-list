import React from 'react';
import { Box, FlexBox } from '@components/ui/Box';
import { CardContent } from '@components/ui/Card';
import Text from '@components/ui/Text';
import PokemonImage from '../PokemonImage';

const PokemonCardHeader = ({ pokemon }) =>
  <CardContent
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Box width="70%" >
      <PokemonImage
        width="100%"
        imageUrl={pokemon.sprites.front_default}
      />
    </Box>
    <Box width="100%">
      <FlexBox fontSize="small">
        <Text fontWeight="bold"> height: </Text>
        {pokemon.height}
      </FlexBox>

      <FlexBox fontSize="small">
        <Text fontWeight="bold">weight: </Text>
        {pokemon.weight}
      </FlexBox>
    </Box>
  </CardContent>

export default PokemonCardHeader;
