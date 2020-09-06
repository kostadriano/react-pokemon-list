import React from 'react';
import PokemonCardHeader from './PokemonCardHeader';
import PokemonCardContent from './PokemonCardContent';
import Card from '@components/ui/Card';

const PokemonCard = ({ pokemon }) =>
  <Card
    margin={3}
    width={{
      xs: 1 / 2,
      sm: 1 / 3,
      md: 1 / 4,
      lg: 1 / 5
    }}
    title="View more"
  >
    <PokemonCardHeader
      pokemon={pokemon}
    />

    <PokemonCardContent
      pokemon={pokemon}
    />
  </Card>

export default PokemonCard;
