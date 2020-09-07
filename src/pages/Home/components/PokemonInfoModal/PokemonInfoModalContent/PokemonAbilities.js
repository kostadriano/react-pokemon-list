import React from 'react';
import Box from '@components/ui/Box';
import Text from '@components/ui/Text';

const PokemonAbilities = ({ abilities }) =>
  <Box>
    <Text fontWeight='bold' fontSize='large'>
      Abilities
    </Text>

    <Box paddingX={2}>
      {abilities.map(ability =>
        <Box key={ability.name} paddingX={2}>
          <Box marginY={2}>
            <Text fontWeight='bold' fontSize='medium'>
              {ability.name}
            </Text>
          </Box>

          <Box marginY={2}>
            <Text fontSize='medium' textAlign='justify' width="100%">
              {ability.description}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  </Box>

PokemonAbilities.defaultProps = {
  abilities: []
}

export default PokemonAbilities;
