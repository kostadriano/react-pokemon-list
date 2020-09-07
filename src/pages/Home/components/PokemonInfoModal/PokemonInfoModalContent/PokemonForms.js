import React from 'react';
import { Box, FlexBox } from '@components/ui/Box';
import Text from '@components/ui/Text';
import Image from '@components/ui/Image';

const PokemonForms = ({ forms }) =>
  <Box>
    <Text fontWeight='bold' fontSize='large'>
      Forms
    </Text>

    <FlexBox paddingX={2} flexWrap='wrap'>
      {Object.keys(forms).map(form =>
        <a href={forms[form]} target="_blank" rel="noopener noreferrer">
          <Image
            key={form}
            src={forms[form]}
            alt={form}
          />
        </a>
      )}
    </FlexBox>
  </Box>

PokemonForms.defaultProps = {
  forms: {}
}

export default PokemonForms;
