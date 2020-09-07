import React from 'react';

import Box from '@components/ui/Box';
import Text from '@components/ui/Text';
import { Table, TableBody, TableRow, TableCell } from '@components/ui/Table';

const selectedInfos = [
  'name',
  'weight',
  'types',
  'height'
]

const PokemonInfos = ({ pokemon }) =>
  <Box>
    <Text fontSize='large' fontWeight='bold'>
      Infos
    </Text>

    <Table marginY={2} marginX='auto'>
      <TableBody>
        {selectedInfos.map(attribute =>
          <TableRow key={attribute}>
            <TableCell fontWeight='bold'>
              {attribute}
            </TableCell>

            <TableCell>
              {String(pokemon[attribute])}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </Box>

export default PokemonInfos;
