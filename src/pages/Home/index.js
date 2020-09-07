import React from 'react';

import PokemonsList from './components/PokemonsList';

import Image from '@components/ui/Image';
import { Box, FlexBox } from '@components/ui/Box';

import logoSrc from '@assets/images/logo.png'

const Home = () =>
  <FlexBox flexDirection="column" alignItems="center">
    <Box
      width={{
        xs: 1,
        sm: 1,
        md: 0.6
      }}
    >
      <Image
        width="100%"
        src={logoSrc}
        alt="React Pokelist Logo"
      />
    </Box>

    <PokemonsList />
  </FlexBox>

export default Home;

