import React from 'react';
import { FlexBox } from '@components/ui/Box';
import Text from '@components/ui/Text';

const PokemonInfoModalHeader = ({ pokemon, onClick }) =>
  <FlexBox padding={3}>
    <Text color='gray' fontSize='large' fontWeight='bold'>
      #{pokemon.id}
    </Text>

    <Text fontSize='larger' fontWeight='bold' textTransform='capitalize'>
      {pokemon.name}
    </Text>

    <Text fontSize='larger' fontWeight='bold' cursor='pointer' onClick={onClick}>
      X
    </Text>
  </FlexBox>

export default PokemonInfoModalHeader
