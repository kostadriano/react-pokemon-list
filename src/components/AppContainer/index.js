import React from 'react';
import Box from '@components/ui/Box'

const AppContainer = ({ children }) =>
  <Box
    padding={4}
    textAlign="center"
  >
    {children}
  </Box >

export default AppContainer;
