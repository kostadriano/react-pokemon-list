import React from 'react';
import { CardHeader } from '@components/ui/Card';
import Text from '@components/ui/Text';

const PokemonCardHeader = ({ pokemon }) =>
  <CardHeader>
    <Text>
      {pokemon.name}
    </Text>

    <Text color="gray" fontSize="large">
      #{pokemon.id}
    </Text>
  </CardHeader>

export default PokemonCardHeader;
