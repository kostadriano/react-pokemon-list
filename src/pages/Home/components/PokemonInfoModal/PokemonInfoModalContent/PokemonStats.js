import React from 'react';

import Box from '@components/ui/Box';
import Text from '@components/ui/Text';
import { Table, TableBody, TableRow, TableCell } from '@components/ui/Table';

const PokemonStats = ({ stats }) =>
  <Box>
    <Text fontSize='large' fontWeight='bold' marginBottom={1}>
      Stats
    </Text>

    <Table marginY={2} marginX='auto'>
      <TableBody>
        {stats.map(stat =>
          <TableRow key={stat.name}>
            <TableCell fontWeight='bold' paddingRight={4}>
              {stat.name}
            </TableCell>

            <TableCell>
              {stat.value}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </Box>

export default PokemonStats;
